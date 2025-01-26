import React from 'react';
import { makeStyles, tokens, ChevronDownRegular,ChevronUpRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({

    contentHeaderIcon: {
        //fontSize: "40px",
        '&:hover': {
            backgroundColor: tokens.colorBrandBackgroundSelected,
            color: "white"
        }
    },
    contentHeaderIconChecked: {
        //fontSize: "40px",
        backgroundColor: tokens.colorBrandBackground
    }
});

interface IconProps {
    selected: boolean;
}

const IconComponent: React.FC<IconProps> = ({ selected }) => {

    const classes = useStyles();

    return (<ChevronDownRegular/>);

    //if (selected) {
    //    return <ChevronDownRegular className={classes.contentHeaderIconChecked } />;
    //}
    //else {
    //    return <ChevronUpRegular className={classes.contentHeaderIcon} />;
    //}
};

export default IconComponent;