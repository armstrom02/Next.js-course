import {useRouter} from 'next/router'

function selectedClientProjectPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    

    return (
        <div>
            <h1>The select portfolio Project Page</h1>
        </div>
    )
}

export default selectedClientProjectPage;