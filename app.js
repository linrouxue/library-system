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

app.listen(3000, () => {
  console.log('Server started on port 3000');//最后
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

// 新增用户
app.post('/admin/addUser', (req, res) => {
  const { RID, Sname, Sphone, password, role } = req.body;
  connection.query('INSERT INTO reader (RID, Sname, Sphone, password, role) VALUES (?, ?, ?, ?, ?)', [RID, Sname, Sphone, password, role], (err) => {
    if (err) throw err;
    res.json({ message: '用户添加成功' });
  });
});

// 展示用户
app.get('/admin/showUser', (req, res) => {
  connection.query('SELECT * FROM reader', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 搜索用户
app.post('/admin/searchUser', (req, res) => {
  const { search } = req.body;
  const query = 'SELECT * FROM reader WHERE Rid LIKE ? OR Sname LIKE ?';
  const searchPattern = `%${search}%`;
  connection.query(query, [searchPattern, searchPattern], (err, results) => {
    if (err) {
      res.json({ error: '查询出错' });
    } else {
      res.json(results);
    }
  });
});

// 删除用户
app.post('/admin/deleteUser', (req, res) => {
  const { RID } = req.body;
  connection.query('DELETE FROM reader WHERE RID = ?', [RID], (err) => {
    if (err) throw err;
    res.json({ message: '用户删除成功' });
  });
});


// 添加书籍
app.post('/admin/addBook', (req, res) => {
  const { BID, Bname, Author, Press } = req.body;
  connection.query('INSERT INTO  book (BID, Bname, Author, Press) VALUES (?, ?, ?, ?)', [BID, Bname, Author, Press], (err) => {
    if (err) throw err;
    res.json({ message: '书籍添加成功' });
  });
});

// 展示书籍
app.get('/admin/showBook', (req, res) => {
  connection.query('SELECT * FROM book', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 搜索书籍
app.post('/admin/searchBook', (req, res) => {
  const { search } = req.body;
  const query = 'SELECT * FROM book WHERE BID LIKE ? OR Bname LIKE ?';
  const searchPattern = `%${search}%`;
  connection.query(query, [searchPattern, searchPattern], (err, results) => {
    if (err) {
      res.json({ error: '查询出错' });
    } else {
      res.json(results);
    }
  });
});

// 删除书籍
app.post('/admin/deleteBook', (req, res) => {
  const { BID } = req.body;
  connection.query('DELETE FROM book WHERE BID = ?', [BID], (err) => {
    if (err) throw err;
    res.json({ message: '书籍删除成功' });
  });
});

// 查询借阅详情
app.get('/admin/showSend', (req, res) => {
  // 从视图表中获取
  connection.query('SELECT * FROM borrow_view', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 搜索借阅详情
app.post('/admin/searchSend', (req, res) => {
  const { search } = req.body;
  // 从视图中获取
  const query = 'SELECT * FROM borrow_view WHERE BID LIKE ? OR RID LIKE ? OR Sname LIKE ? OR Bname LIKE ?';
  const searchPattern = `%${search}%`;
  connection.query(query, [searchPattern, searchPattern, searchPattern, searchPattern], (err, results) => {
    if (err) {
      res.json({ error: '查询出错' });
    } else {
      res.json(results);
    }
  });
});












//关闭数据库连接

// connection.end((err) => {
//   if (err) {
//     console.error('Error closing MySQL database connection: ' + err.stack);
//     return;
//   }
//   console.log('MySQL database connection closed');
// });

 