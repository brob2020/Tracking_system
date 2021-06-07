// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === 'POST') {
    const { a, b } = req.body;
    res.send(`The sum is: ${a + b}`);
    console.log("text")
  } else
    console.log("bad request")

}
