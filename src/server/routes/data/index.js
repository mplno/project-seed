let getData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Here's your async data!`);
        }, 200);
    });
}

export let fetch = async (req, res) => {
  const message = await getData()
  res.json({ message })
}
