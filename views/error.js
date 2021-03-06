import React from 'react';
import Head from './head';
import Foot from './foot';

export default React.createClass({

  render: function() {
    return (
      <html>
      <Head {...this.props} />
      <body>
      <div className='error'>
        <header>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h1><a href='/'>match<span className='audio-lighten'>.audio</span></a></h1>
              </div>
            </div>
          </div>
        </header>
        <div className='container main'>
          <div className='row'>
            <div className='col-md-6 col-md-offset-3'>
              <h2>{this.props.status}</h2>
              <h1>{this.props.message}</h1>
              <pre>{this.props.error || ''}</pre>
            </div>
          </div>
        </div>
        <Foot page='error' />
      </div>
      </body>
      </html>
    );
  }
});
