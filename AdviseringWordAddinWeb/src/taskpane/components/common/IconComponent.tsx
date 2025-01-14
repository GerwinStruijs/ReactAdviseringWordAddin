import React, { FC } from 'react';
import {
    CheckboxIndeterminate20Filled,
    CheckboxChecked20Filled
} from '@fluentui/react-icons';

interface IconProps {
    status: string;
}

const IconComponent: FC<IconProps> = ({ status }) => {
    switch (status) {
        case 'SUCCESS':
            return <CheckboxChecked20Filled color="green" />;
        case 'FAILURE':
            return <CheckboxChecked20Filled color="red"/>;
        case 'WARNING':
            return <CheckboxChecked20Filled color="orange"/>;
        default:
            return <CheckboxIndeterminate20Filled />;
    }
};

export default IconComponent;