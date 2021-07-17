import { useRouter } from 'next/router';
import Link from 'next/link';

function clientsPage() {

    const clients = [
        { id: 'vivek', name: 'vivek' },
        { id: 'singh', name: 'singh' },
    ]

    return (
        <div>
            <h1>The clientsPage Page</h1>
            <ul>
                {clients.map(client => <li key={client.id}><Link
                    href={{
                        pathname: '/clients/[id]',
                        query: { id: client.id }
                    }}
                >{client.name}</Link></li>)}
            </ul>
        </div>
    )
}

export default clientsPage;