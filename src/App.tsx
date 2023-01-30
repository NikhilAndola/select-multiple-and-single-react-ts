import React, { useState } from 'react'
import { Select, SelectOption } from './Select'

const options = [
  {label: "First", value: 1},
  {label: "Second", value: 2},
  {label: "third", value: 3},
  {label: "fourth", value: 4},
  {label: "Fifth", value: 5},

]

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined >(options[0]);

  return (
    <div>
      <Select multiple options={options} value={value1} onChange={ opt => setValue1(opt) }/> 
      <br/>
      <Select options={options} value={value2} onChange={ opt => setValue2(opt) }/> 
    </div>
  )
}

export default App
