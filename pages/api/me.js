// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
    try {
        res.status(200)
            .json({ name: 'ShukranIsaac' });
    } catch (err) {
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' })
    }
}