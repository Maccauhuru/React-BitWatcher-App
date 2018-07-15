import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Rates from '../components/Rates.js';

const Index = (props)=>(
    <Layout>
        <div>
            <h1>Welcome to BitWatcher</h1>
            <br />
            <p><strong>Check current Bitcoin rate</strong></p>
            <Rates bpi={props.bpi}/>
        </div>
    </Layout>);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi : data.bpi
    };
}



export default Index;
