import React, { useState } from 'react';

const StateSelector = () => {
    // State to store the selected state
    const [selectedState, setSelectedState] = useState('');

    // List of U.S. states
    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
        'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 
        'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 
        'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
        'Wisconsin', 'Wyoming'
    ];

    // Handle change event
    const handleChange = (event) => {
        setSelectedState(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You have selected: ${selectedState}`);
    };

    return (
        <div className='m-3'>
            <h4>Select a U.S. State</h4>
            <form onSubmit={handleSubmit}>
    
            
                <label className="badge bg-light text-danger" htmlFor="state-select">Choose a state:</label>
                <select

                    id="state-select"
                    value={selectedState}
                    onChange={handleChange}
                   className="form-select mb-3"
                >
                    <option  value="">--Please choose an option--</option>
                    {states.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
               
            </form>
            
        </div>
    );
};

export default StateSelector;
