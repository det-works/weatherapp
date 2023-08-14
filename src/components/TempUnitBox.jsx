import './styles/TempToggle.css';

function TempToggle({unit}) {
    if(unit === 'f') {
        return (
            <span>C&deg; / <strong>F&deg;</strong></span>
        );
    }
    else if(unit === 'c') {
        return (
            <span><strong>C&deg;</strong> / F&deg;</span>
        )
    }
    else {
        return (
            <span>C&deg; / F&deg;</span>
        )
    }
}

export default function TempUnitBox({unit}) {
    
    return (
        <div>
            <TempToggle unit={unit}/>
        </div>
    );
}