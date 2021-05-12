import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import './LeftContainer.css'

function LeftContainer(){
  const [state, setState] = React.useState({
            data_science: false,
            software: false,
            finance: false,
            operation:false,
            design:false,
        });
        const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
        };
        const { data_science,software,finance,operation,design } = state;
        
        const useStyles = makeStyles((theme) => ({
                root: {
                display: 'flex',
                },
                formControl: {
                margin: theme.spacing(3),
                },
            }));

            const classes = useStyles();
  
    

    return (
        <div className="check">
            <div className={classes}>
            <FormGroup >
                <FormControlLabel
                    className="box"
                    control={<Checkbox checked={data_science} onChange={handleChange} name="data_science" />}
                    label="Data Science"
                />
                <FormControlLabel
                    className="box"
                    control={<Checkbox checked={software} onChange={handleChange} name="software" />}
                    label="Software development"
                />
                <FormControlLabel
                    className="box"
                    control={<Checkbox checked={finance} onChange={handleChange} name="finance" />}
                    label="Finance"
                />
                <FormControlLabel
                    className="box"
                    control={<Checkbox checked={operation} onChange={handleChange} name="operation" />}
                    label="Operations"
                />
                <FormControlLabel
                    className="box"
                    control={<Checkbox checked={design} onChange={handleChange} name="design" />}
                    label="Design"
                />
        </FormGroup>
        </div>
        </div>
        );
};

export default LeftContainer;
