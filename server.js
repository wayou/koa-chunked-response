const Koa = require("koa");
const app = new Koa();
const PORT = 3000;
app.use((ctx, _next) => {
  const res = ctx.res;
  ctx.status = 200;
  res.setHeader("Content-Type", "text/html");
  res.write(`start<br>`);
  return new Promise(resolve => {
    let i = 0,
      total = 5;
    while (i <= total) {
      (function(i) {
        setTimeout(() => {
          if (i === total) {
            resolve();
            res.end();
          } else {
            res.write(`${i}<br>`);
          }
        }, i * 1000);
      })(i);
      i++;
    }
  });
});

app.listen(PORT);
console.info(`server started at http://localhost:${PORT}`);
