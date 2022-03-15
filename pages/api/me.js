// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
    try {
        const res = await fetch('http://localhost:8080/v1/users/me', { method: 'GET' })
        const latestDataItems = await res.json()
        res.status(200).send(latestDataItems)
    } catch (err) {
        await res.status(500)
            .json({
                status: 500,
                msg: 'Something went wrong',
                error: err
            })
    }
}