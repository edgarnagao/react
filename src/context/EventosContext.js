import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
    
    state = { 
        eventos : []
     }

    token = "4UI6KYXFJOLAVDERZ37O"
    ordenar = 'date'


    //`

    obtenerEventos = async (busqueda) => {
        
        let url =  `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

        const eventos = await axios.get(url);

        console.log(eventos)

        this.setState({

        })

    }

    render() { 
        return ( 
            <EventosContext.Provider
                value={{
                    eventos:this.state.eventos,
                    obtenerEventos:this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
        );
    }
}
 
export default EventosProvider;