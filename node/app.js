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
  password: 'Admin123!',
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
app.post('/api/login', (req, res) => {
  const { account, password, role } = req.body;
  connection.query('SELECT * FROM Reader WHERE RID = ?', [account], (err, results) => {
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
 
// 修改密码
app.post('/api/changePassword', (req, res) => {
  const { RID, password } = req.body;
  connection.query('UPDATE Reader SET password = ? WHERE RID = ?', [password, RID], (err) => {
    if (err) throw err;
    res.json({ message: '密码修改成功' });
  });
});

// 新增用户
app.post('/api/admin/addUser', (req, res) => {
  const { RID, Sname, Sphone, password, role } = req.body;
  connection.query('INSERT INTO Reader (RID, Sname, Sphone, password, role) VALUES (?, ?, ?, ?, ?)', [RID, Sname, Sphone, password, role], (err) => {
    if (err) throw err;
    res.json({ message: '用户添加成功' });
  });
});

// 展示用户
app.get('/api/admin/showUser', (req, res) => {
  connection.query('SELECT * FROM Reader', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 搜索用户
app.post('/api/admin/searchUser', (req, res) => {
  const { search } = req.body;
  const query = 'SELECT * FROM Reader WHERE Rid LIKE ? OR Sname LIKE ?';
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
app.post('/api/admin/deleteUser', (req, res) => {
  const { RID } = req.body;
  connection.query('DELETE FROM Reader WHERE RID = ?', [RID], (err) => {
    if (err) throw err;
    res.json({ message: '用户删除成功' });
  });
});


// 添加书籍
app.post('/api/admin/addBook', (req, res) => {
  const { BID, Bname, Author, Press } = req.body;
  connection.query('INSERT INTO  BOOK (BID, Bname, Author, Press) VALUES (?, ?, ?, ?)', [BID, Bname, Author, Press], (err) => {
    if (err) throw err;
    res.json({ message: '书籍添加成功' });
  });
});

// 展示书籍
app.get('/api/admin/showBook', (req, res) => {
  connection.query('SELECT * FROM BOOK', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 搜索书籍
app.post('/api/admin/searchBook', (req, res) => {
  const { search } = req.body;
  const query = 'SELECT * FROM BOOK WHERE BID LIKE ? OR Bname LIKE ?';
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
app.post('/api/admin/deleteBook', (req, res) => {
  const { BID } = req.body;
  connection.query('DELETE FROM BOOK WHERE BID = ?', [BID], (err) => {
    if (err) throw err;
    res.json({ message: '书籍删除成功' });
  });
});

// 查询借阅详情
app.get('/api/admin/showSend', (req, res) => {
  // 从视图表中获取
  connection.query('SELECT * FROM borrow_view ORDER BY startTime DESC', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 搜索借阅详情
app.post('/api/admin/searchSend', (req, res) => {
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

// 用户接口

// 查询书籍
app.get('/api/user/showBook', (req, res) => {
  connection.query('SELECT * FROM books_view', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// 搜索书籍
app.post('/api/user/searchBook', (req, res) => {
  const { search } = req.body;
  const query = 'SELECT * FROM books_view WHERE BID LIKE ? OR Bname LIKE ?';
  const searchPattern = `%${search}%`;
  connection.query(query, [searchPattern, searchPattern], (err, results) => {
    if (err) {
      res.json({ error: '查询出错' });
    } else {
      res.json(results);
    }
  });
});

// 借阅书籍
app.post('/api/user/sendBook', (req, res) => {
  const { SID, BID, RID, startTime, endTime } = req.body;
  connection.query('INSERT INTO SEND (SID, BID, RID, startTime, endTime) VALUES (?, ?, ?, ?, ?)', [SID, BID, RID, startTime, endTime], (err) => {
    if (err) throw err;
    res.json({ message: '借阅成功' });
  })
});

// 查看自己借阅的书籍
app.get('/api/user/showBack', (req, res) => {
  const { RID } = req.query;
  connection.query('SELECT * FROM back_view WHERE RID = ? AND startTime IS NOT NULL AND endTime IS NULL', [RID], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 归还书籍
app.post('/api/user/backBook', (req, res) => {
  const { SID } = req.body;
  connection.query('UPDATE SEND SET endTime = NOW() WHERE SID = ?', [SID], (err) => {
    if (err) throw err;
    res.json({ message: '归还成功' });
  });
});



 