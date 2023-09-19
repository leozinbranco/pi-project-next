import styles from './upload.module.css'
import { Card, Text, CardBody } from '@chakra-ui/react'

export default function Home () {
  return (
    <main className={styles.main}>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
    </main>
  )
}
