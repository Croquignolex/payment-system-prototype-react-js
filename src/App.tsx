import React, {ReactElement} from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'

const App = (): ReactElement => {
    return (
        <Card>
            <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
        </Card>
    );
}

export default App;
