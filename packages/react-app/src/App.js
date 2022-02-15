import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'

export default function App() {
  return (
    <div className="App">
      <Container className="p-3">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header><Card.Title>Swap Tokens</Card.Title></Card.Header>
              <Card.Body>
                <Stack direction="horizontal" className='mb-3'>
                  <Card.Text as='div'>BNB</Card.Text>
                  <Card.Text as='div' className="ms-auto"><span>Balance: </span>100</Card.Text>
                </Stack>
                <Stack className="bg-light border p-2 mb-4 pb-3">
                  <Stack className='ms-auto'>
                    <Card.Text as='div'  className='mb-3 ms-auto'>0.0</Card.Text>
                    <Button variant="primary" size="sm">Max</Button>
                  </Stack>
                </Stack>
                <Stack direction="horizontal" className='mb-3'>
                  <Card.Text as='div'>CAKE</Card.Text>
                  <Card.Text as='div' className="ms-auto"><span>Balance: </span>0.0</Card.Text>
                </Stack>
                <Stack className="bg-light border p-2 mb-4">
                  <Card.Text as='div' className="ms-auto">
                    <Card.Text as='div'>0.0</Card.Text>
                  </Card.Text>
                </Stack>
                <Stack>
                  <Button variant="primary">Enter an amount</Button>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
