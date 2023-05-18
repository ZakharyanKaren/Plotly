import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import './App.css';
import dataJSON from './data/experimentData';

const App = () => {
  const [state, setState] = useState({
    data: dataJSON.map(data => {
      return {
        name: data.catalog,
        x: data.arrayX,
        y: data.arrayY,
        type: 'scattergl',
        mode: 'markers',
        marker: {color: data.color},
        legendgroup: data.catalog, // Assign a legend group for LABEL 1
        showlegend: true,
        hoverinfo: 'none',
        hovertemplate: `catalog=${data.catalog}<br>MJD_start=%{x}<br>flux=%{y}<extra></extra>`,  // Customize hover template
        error_y: {
          type: 'data',
          array: data.errorY,
        }
      }
    }),
    layout: {width: 1024, height: 768, title: 'A Fancy Plot', legend: {
      title: {
        text: 'Catalog'
      },
      itemsizing: 'constant', // Ensure constant legend item size
      tracegroupgap: 8 // Increase the gap between legend groups
    }},
    frames: [],
    config: {}
  });

  return (
    <Plot
      data={state.data}
      layout={state.layout}
      onInitialized={(figure) => setState(figure)}
      onUpdate={(figure) => setState(figure)}
    />
  );
};

export default App;