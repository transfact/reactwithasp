import axios from 'axios';
export async function DelBlogById(id) {
    try {
        const result = await axios({ method: 'DELETE', url: `https://localhost:7281/api/Blogs/${id}`, withCredentials: true });
        console.log('resu', result);
        if (result.status === 200) {
            return { ...result.data, code: 'SUCCESS' };
        } else {
            return { ...result, code: 'FAIL' };
        }
    } catch (e) {
        console.log(e);
        const err = { code: 'ERR NETWORK' };
        return err;
    }
}
