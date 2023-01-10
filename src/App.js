import logo from './logo.svg';
import './components/product.css'
import Header from './components/Header';
import InfoCard from './components/InfoCard';
import GetStartedButton from './components/GetStartedButton';

function App() {

  let cardDetails = [
    {
      cssfronttype: 'card__side card__side--front-1',
            cssbacktype: 'card__side card__side--back card__side--back-1',
            info1:'1 Website',
            info2:'50 GB SSD Storage',
            info3:'Unmetered Bandwidth',
            info4:'Free SSL Certificate',
            info5:'1 Included Domain',
            info6:'1 Included Domain',
            plantype:'Basic',
            price:'$2.95'
    },
    {
      cssfronttype: 'card__side card__side--front-2',
            cssbacktype: 'card__side card__side--back card__side--back-2',
            info1:'1 Website',
            info2:'50 GB SSD Storage',
            info3:'Unmetered Bandwidth',
            info4:'Free SSL Certificate',
            info5:'1 Included Domain',
            info6:'1 Included Domain',
            plantype:'Basic',
            price:'$2.95'
    },
    {
      cssfronttype: 'card__side card__side--front-3',
            cssbacktype: 'card__side card__side--back card__side--back-3',
            info1:'1 Website',
            info2:'50 GB SSD Storage',
            info3:'Unmetered Bandwidth',
            info4:'Free SSL Certificate',
            info5:'1 Included Domain',
            info6:'1 Included Domain',
            plantype:'Basic',
            price:'$2.95'
    }

  ];

  

  return (
    <>
      <title>Flipping Cards</title>
      <section>
        <Header headingTag={'Hosting Plans'} />
        <div className="row">
          {}
          <InfoCard
            cssfronttype={'card__side card__side--front-1'}
            cssbacktype={'card__side card__side--back card__side--back-1'}
            info1={'1 Website'}
            info2={'50 GB SSD Storage'}
            info3={'Unmetered Bandwidth'}
            info4={'Free SSL Certificate'}
            info5={'1 Included Domain'}
            info6={'1 Included Domain'}
            plantype={'Basic'}
            price={'$2.95'} />
          <InfoCard
            cssfronttype={'card__side card__side--front-2'}
            cssbacktype={'card__side card__side--back card__side--back-3'}
            info1={'1 Website'}
            info2={'50 GB SSD Storage'}
            info3={'Unmetered Bandwidth'}
            info4={'Free SSL Certificate'}
            info5={'1 Included Domain'}
            info6={'1 Included Domain'}
            plantype={'Standard'}
            price={'$5.95'} />
          <InfoCard
            cssfronttype={'card__side card__side--front-3'}
            cssbacktype={'card__side card__side--back card__side--back-3'}
            info1={'1 Website'}
            info2={'50 GB SSD Storage'}
            info3={'Unmetered Bandwidth'}
            info4={'Free SSL Certificate'}
            info5={'1 Included Domain'}
            info6={'1 Included Domain'}
            plantype={'Premium'}
            price={'$10.95'} />
        </div>
        <GetStartedButton buttonName={'Get Started'}/>
      </section>
    </>
  );
}

export default App;
