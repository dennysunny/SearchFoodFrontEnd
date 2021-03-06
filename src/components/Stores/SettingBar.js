import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Toolbar,
  Grid,
  Button,
  makeStyles,
  Typography,
  TextField,
  MenuItem,
} from '@material-ui/core';
import {
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from '@material-ui/icons';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
  pageSettings: {
    '& > p': {
      padding: 16,
    },
  },
  textField: {
    width: 150,
    '& div': {
      padding: theme.spacing(0.5),
    },
    '& label': {
      transform: 'translate(50%, 50%)',
    },
    '& fieldset': {
      borderWidth: 1,
      borderRadius: 0,
      borderColor: '#000',
    },
  },
  input: {
    color: theme.palette.primary.main,
  },
}));

const SettingBar = ({
  path,
  length,
  match,
  pageIndex,
  changePageIndex,
  sortByStar,
  sortByCreatedDate,
}) => {
  const [filterTarget, setFilterTarget] = useState(null);
  const [favoriteName, setFavoriteName] = useState('');
  const classes = useStyles();

  const handleChange = e => {
    if (e.target.value.indexOf('由高到低') !== -1) {
      sortByStar(1);
    } else {
      sortByStar(-1);
    }
    setFavoriteName(e.target.value);
    setFilterTarget('star');
  };

  const handleCreatedDateClick = () => {
    setFavoriteName('');
    setFilterTarget('createdDate');
    sortByCreatedDate();
  };

  return (
    <Toolbar>
      <Grid
        container
        spacing={3}
        justify="flex-start"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item>
          <Button
            variant="outlined"
            color={filterTarget === 'createdDate' ? 'secondary' : 'inherit'}
            onClick={handleCreatedDateClick}
          >
            新上市
          </Button>
        </Grid>
        <Grid item>
          <TextField
            select
            label={favoriteName === '' ? '星星數' : ''}
            className={classes.textField}
            value={favoriteName}
            onChange={handleChange}
            InputLabelProps={{ shrink: false }}
            InputProps={{
              className: classes.input,
            }}
            variant="outlined"
          >
            <MenuItem value="星星：由高到低">星星：由高到低</MenuItem>
            <MenuItem value="星星：由低到高">星星：由低到高</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      {match ? (
        ''
      ) : (
        <Grid
          container
          justify="flex-end"
          alignContent="center"
          className={classes.pageSettings}
        >
          <Button
            onClick={() => changePageIndex('prev')}
            disabled={1 === pageIndex}
            component={Link}
            to={`${path}&page=${pageIndex - 1}`}
          >
            <ArrowBackIosIcon
              style={{
                color: pageIndex === 1 ? grey[400] : grey[700],
              }}
            />
          </Button>
          <Typography>{`${pageIndex}/${length}`}</Typography>
          <Button
            onClick={() => changePageIndex('next')}
            disabled={length === pageIndex}
            component={Link}
            to={`${path}&page=${pageIndex + 1}`}
          >
            <ArrowForwardIosIcon
              style={{
                color: length === pageIndex ? grey[400] : grey[700],
              }}
            />
          </Button>
        </Grid>
      )}
    </Toolbar>
  );
};

SettingBar.propTypes = {
  path: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  match: PropTypes.bool.isRequired,
  pageIndex: PropTypes.number.isRequired,
  changePageIndex: PropTypes.func.isRequired,
  sortByStar: PropTypes.func.isRequired,
  sortByCreatedDate: PropTypes.func.isRequired,
};

export default SettingBar;
