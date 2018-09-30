import React from 'react';


// components 
import RButton from '../components/Atoms/RButton';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <section className="home">
        <RButton text={'Styleguide'} to={'styleguide'} link/>
      </section>
    )
  }
}
export default Home;
