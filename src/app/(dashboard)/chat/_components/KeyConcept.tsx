
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
interface KeyConceptProps {
    concept: string;
    explanation: string;
    header : string;
}
export default function KeyConcepts({concepts} : {concepts : KeyConceptProps[]}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="bg-purple-200 dark:bg-purple-800">
        <CardHeader>
          <CardTitle className="text-purple-600 dark:text-purple-300">{concepts[0].concept}</CardTitle>
          <CardDescription className="text-purple-500 dark:text-purple-400">
           {concepts[0].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-purple-700 dark:text-purple-200">
          {concepts[0].explanation}
          </p>
        </CardContent>
      </Card>

      <Card className="bg-yellow-200 dark:bg-yellow-800">
        <CardHeader>
          <CardTitle className="text-yellow-600 dark:text-yellow-300">{concepts[1].concept}</CardTitle>
          <CardDescription className="text-yellow-500 dark:text-yellow-400">
            {concepts[1].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-yellow-700 dark:text-yellow-200">
          {concepts[1].explanation}

          </p>
        </CardContent>
      </Card>
      <Card className="bg-green-200 dark:bg-green-800">
        <CardHeader>
          <CardTitle className="text-green-600 dark:text-green-300">{concepts[2].concept}</CardTitle>
          <CardDescription className="text-green-500 dark:text-green-400">
          {concepts[2].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-green-700 dark:text-green-200">
          {concepts[2].explanation}
           
          </p>
        </CardContent>
      </Card>
      <Card className="bg-blue-200 dark:bg-blue-800">
        <CardHeader>
          <CardTitle className="text-blue-600 dark:text-blue-300">{concepts[3].concept}</CardTitle>
          <CardDescription className="text-blue-500 dark:text-blue-400">
          {concepts[3].header}
          
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700 dark:text-blue-200">
          {concepts[3].explanation}
           </p>
        </CardContent>
      </Card>
      <Card className="bg-red-200 dark:bg-red-800">
        <CardHeader>
          <CardTitle className="text-red-600 dark:text-red-300">{concepts[4].concept}</CardTitle>
          <CardDescription className="text-red-500 dark:text-red-400">
           {concepts[4].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-red-700 dark:text-red-200">
          {concepts[4].explanation}

          </p>
        </CardContent>
      </Card>
      <Card className="bg-pink-200 dark:bg-pink-800">
        <CardHeader>
          <CardTitle className="text-pink-600 dark:text-pink-300">{concepts[5].concept}</CardTitle>
          <CardDescription className="text-pink-500 dark:text-pink-400">
           {concepts[5].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-red-700 dark:text-red-200">
          {concepts[5].explanation}

          </p>
        </CardContent>
      </Card>
    </div>
  )
}

