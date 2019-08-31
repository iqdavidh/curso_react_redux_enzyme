import React from 'react';
import {mount} from 'enzyme';
import Note from './Note';


describe('Note', function () {

  const valorTexto="dumy body";

  let note=mount(<Note text={valorTexto} />);

  it('el texto pasado se agrega al cuerpo de la nota', function () {

    //console.log(note.debug());
    expect( note.find('p').text()).toEqual( valorTexto);

  });


});
