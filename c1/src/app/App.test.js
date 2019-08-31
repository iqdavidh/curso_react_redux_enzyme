import React from 'react';
import {mount} from 'enzyme';
import App from './App';


describe('App - render', function () {

  const app = mount(<App/>);

  it('se muestra el h2 titulo correcto', () => {
    console.debug(app.debug());
    expect(app.find('h2').text()).toEqual('Note to self2');
  });

  it('se muestra el boton clear',()=>{
    expect(app.find('button.btnClear').text()).toEqual('Clear');
  });


  it('se muestra control Form',()=>{
    expect( app.find('Form').exists()).toBe(true);

  });



});

