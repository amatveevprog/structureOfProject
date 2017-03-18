/**
 * Created by Bonya on 18.03.2017.
 */

export default function(ctx) {
    const app = ctx.asyncRouter;
    app.get('/_sub/biling', async (req, res) => {
        console.log(`request subdomains are: ${req.subdomains}`);
        return('билиноговая инфа');
    });
}