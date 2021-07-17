import {useRouter} from 'next/router'

function clientsPage() {
    const router = useRouter();

    return (
        <div>
            <h1>The clientsPage Page</h1>
        </div>
    )
}

export default clientsPage;