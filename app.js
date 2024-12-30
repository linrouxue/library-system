// nodejs编写代码
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());
app.use(cors());
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'library'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);//第一步
});

connection.query('SELECT * FROM reader', (err, results, fields) => {
  if (err) throw err;
  console.log('Results: ', results);

  app.post('/api', (req, res) => {
    res.send(results);
  });

  app.listen(3000, () => {
    console.log('Server started on port 3000');//最后
  });
});


// 登录接口
app.post('/login', (req, res) => {
  const { account, password, role } = req.body;
  connection.query('SELECT * FROM reader WHERE RID = ?', [account], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.json({ message: '账号或密码错误' });
    }
    const user = results[0];
    // 明文密码(后期可以改成别的验证方式)
    if(password === user.password && role === user.role){
      res.json({ status: 200, message: '登录成功', role: role });
    } else {
      res.json({ message: '账号或密码错误' });
    }
  })
});

















//关闭数据库连接

// connection.end((err) => {
//   if (err) {
//     console.error('Error closing MySQL database connection: ' + err.stack);
//     return;
//   }
//   console.log('MySQL database connection closed');
// });

 