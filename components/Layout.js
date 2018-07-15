import Head from 'next/head';
import Navigation from './Navigation';

const Layout = (props)=>(
    <div>
    <Head>
    <title>BitWatcher App</title>
    <link rel='stylesheet' href='https://bootswatch.com/4/flatly/bootstrap.min.css' />
    </Head>
    <Navigation />
    <div className="container">
    {props.children}
    </div>
    
    </div>);

export default Layout;