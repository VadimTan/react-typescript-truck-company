import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SelectBar = (): any => {
	const [data, setData] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setData(event.target.value);
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id="demo-simple-select-helper-label">Career *</InputLabel>
			<Select
				required
				labelId="demo-simple-select-helper-label"
				id="demo-simple-select-helper"
				value={data}
				label="Career"
				onChange={handleChange}>
				<MenuItem value={'truck driver'}>Truck Driver</MenuItem>
				<MenuItem value={'manager'}>Manager</MenuItem>
				<MenuItem value={'loader'}>Loader</MenuItem>
			</Select>
			<FormHelperText>Choose your career</FormHelperText>
		</FormControl>
	);
};
