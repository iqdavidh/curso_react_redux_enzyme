import React from 'react';
import {mount} from 'enzyme';
import App from './App';


describe('App - render', function () {

  const app = mount(<App/>);


  it('se muestra control Form', () => {
    expect(app.find('Form').exists()).toBe(true);
  });

  it('se muestra el h2 titulo correcto', () => {
    //console.debug(app.debug());
    expect(app.find('h2').text()).toEqual('Note to self2');
  });

  it('se muestra el boton clear', () => {
    expect(app.find('button.btnClear').text()).toEqual('Clear');
  });


  it('se muestra boton submit', () => {
    expect(app.find('button.btnSubmit').text()).toEqual('Submit');
  });


});


/* *********************************************************** */

describe('App - el funcionamiento del formulario add nota', function () {

  let app = null;


  beforeEach(() => {
    app = mount(<App/>);
  });


  it('cambiar el texto del formcontrol se refleja en el state', () => {

    let textoNota = 'un dumy texto primero';

    app.find('FormControl')
        .simulate('change', {target: {value: textoNota}});

    console.log(app.state());

    expect(app.state().text).toEqual(textoNota);
  });

  it('al hacer sumit se agrega a la lista notas "notes"', () => {

    let textoNota = 'nota primera';

    app.find('FormControl')
        .simulate('change', {target: {value: textoNota}});

    app.find('button.btnSubmit')
        .simulate('click');

    /*esto cambia el estate*/
    console.log(app.state().notes);

    let objectNota1= app.state().notes[0];
    expect( typeof objectNota1).toEqual("object");
    expect( objectNota1.id).toEqual(1);
    expect( objectNota1.text).toEqual(textoNota);
  });

});
