import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card'
interface KeyConceptProps {
  concept: string
  explanation: string
  header: string
}
export default function KeyConcepts({
  concepts,
}: {
  concepts: KeyConceptProps[]
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="bg-gradient-to-br from-purple-300 to-purple-400 dark:bg-purple-800 hover:shadow-md hover:shadow-purple-600 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-purple-600 dark:text-purple-300">
            {concepts[0].concept}
          </CardTitle>
          <CardDescription className="text-purple-600 dark:text-purple-400">
            {concepts[0].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-purple-800 dark:text-purple-200">
            {concepts[0].explanation}
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-yellow-300 to-yellow-400 dark:bg-yellow-800 hover:shadow-md hover:shadow-yellow-600 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-yellow-700 dark:text-yellow-300">
            {concepts[1].concept}
          </CardTitle>
          <CardDescription className="text-yellow-600 dark:text-yellow-400">
            {concepts[1].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-yellow-800 dark:text-yellow-200">
            {concepts[1].explanation}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-green-300 to-green-400 dark:bg-green-800 hover:shadow-md hover:shadow-green-600 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-green-700 dark:text-green-300">
            {concepts[2].concept}
          </CardTitle>
          <CardDescription className="text-green-600 dark:text-green-400">
            {concepts[2].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-green-800 dark:text-green-200">
            {concepts[2].explanation}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-blue-300 to-blue-400 dark:bg-blue-800 hover:shadow-md hover:shadow-blue-600 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300">
            {concepts[3].concept}
          </CardTitle>
          <CardDescription className="text-blue-600 dark:text-blue-400">
            {concepts[3].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-blue-800 dark:text-blue-200">
            {concepts[3].explanation}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-red-300 to-red-400 dark:bg-red-800 hover:shadow-md hover:shadow-red-600 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-red-700 dark:text-red-300">
            {concepts[4].concept}
          </CardTitle>
          <CardDescription className="text-red-600 dark:text-red-400">
            {concepts[4].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-red-800 dark:text-red-200">
            {concepts[4].explanation}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-pink-300 to-pink-400 dark:bg-pink-800 hover:shadow-md hover:shadow-pink-600 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-pink-700 dark:text-pink-300">
            {concepts[5].concept}
          </CardTitle>
          <CardDescription className="text-pink-600 dark:text-pink-400">
            {concepts[5].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-pink-800 dark:text-red-200">
            {concepts[5].explanation}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
