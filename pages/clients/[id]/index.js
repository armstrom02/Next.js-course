import { useRouter } from 'next/router'

function ClientProjectPage() {
    const router = useRouter();

    console.log(router.query);

    function loadProjecctHandler() {
        // load data...
        // router.push('/clients/vivek/projecta');
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'vivek', clientprojectid: 'projecta' }
        });

    }

    return (
        <div>
            <h1>The Client Project Page</h1>
            <button onClick={loadProjecctHandler}>Load Project A</button>
        </div>
    )
}

export default ClientProjectPage;