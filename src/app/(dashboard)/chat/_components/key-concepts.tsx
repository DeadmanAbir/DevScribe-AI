import { TwitterShareButton } from "react-share";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { KeyConceptProps } from "@/types/chat/chat-types";
export default function KeyConcepts({
  concepts,
}: {
  concepts: KeyConceptProps[];
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="bg-gradient-to-br from-purple-300 to-purple-400 dark:bg-purple-800  cursor-pointer relative overflow-hidden group">
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
        <CardFooter className="absolute bg-purple-400/80 flex items-center text-center p-2 justify-center -bottom-10 group-hover:bottom-0 w-full h-1/6 group-hover:opacity-100 opacity-0 transition-all duration-300 ">
          <TwitterShareButton url={concepts[0].explanation}>
            <Image
              src="/icons8-twitterx (1).svg"
              alt="twitter"
              height={30}
              width={30}
            />{" "}
          </TwitterShareButton>
        </CardFooter>
      </Card>

      <Card className="bg-gradient-to-br from-yellow-300 to-yellow-400 dark:bg-yellow-800  cursor-pointer relative overflow-hidden group">
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
        <CardFooter className="absolute bg-yellow-400/80 flex items-center text-center p-2 justify-center -bottom-10 group-hover:bottom-0 w-full h-1/6 group-hover:opacity-100 opacity-0 transition-all duration-300 ">
          <TwitterShareButton url={concepts[1].explanation}>
            <Image
              src="/icons8-twitterx (1).svg"
              alt="twitter"
              height={30}
              width={30}
            />{" "}
          </TwitterShareButton>
        </CardFooter>
      </Card>
      <Card className="bg-gradient-to-br from-green-300 to-green-400 dark:bg-green-800  cursor-pointer relative overflow-hidden group">
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
        <CardFooter className="absolute bg-green-400/80 flex items-center text-center p-2 justify-center -bottom-10 group-hover:bottom-0 w-full h-1/6 group-hover:opacity-100 opacity-0 transition-all duration-300 ">
          <TwitterShareButton url={concepts[2].explanation}>
            <Image
              src="/icons8-twitterx (1).svg"
              alt="twitter"
              height={30}
              width={30}
            />{" "}
          </TwitterShareButton>
        </CardFooter>
      </Card>
      <Card className="bg-gradient-to-br from-blue-300 to-blue-400 dark:bg-blue-800  cursor-pointer relative overflow-hidden group">
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
        <CardFooter className="absolute bg-blue-400/80 flex items-center text-center p-2 justify-center -bottom-10 group-hover:bottom-0 w-full h-1/6 group-hover:opacity-100 opacity-0 transition-all duration-300 ">
          <TwitterShareButton url={concepts[3].explanation}>
            <Image
              src="/icons8-twitterx (1).svg"
              alt="twitter"
              height={30}
              width={30}
            />{" "}
          </TwitterShareButton>
        </CardFooter>
      </Card>
      <Card className="bg-gradient-to-br from-red-300 to-red-400 dark:bg-red-800  cursor-pointer relative overflow-hidden group">
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
        <CardFooter className="absolute bg-red-400/80 flex items-center text-center p-2 justify-center -bottom-10 group-hover:bottom-0 w-full h-1/6 group-hover:opacity-100 opacity-0 transition-all duration-300 ">
          <TwitterShareButton url={concepts[4].explanation}>
            <Image
              src="/icons8-twitterx (1).svg"
              alt="twitter"
              height={30}
              width={30}
            />{" "}
          </TwitterShareButton>
        </CardFooter>
      </Card>
      <Card className="bg-gradient-to-br from-pink-300 to-pink-400 dark:bg-pink-800 cursor-pointer relative overflow-hidden group">
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
        <CardFooter className="absolute bg-pink-400/80 flex items-center text-center p-2 justify-center -bottom-10 group-hover:bottom-0 w-full h-1/6 group-hover:opacity-100 opacity-0 transition-all duration-300 ">
          <TwitterShareButton url={concepts[5].explanation}>
            <Image
              src="/icons8-twitterx (1).svg"
              alt="twitter"
              height={30}
              width={30}
            />{" "}
          </TwitterShareButton>
        </CardFooter>
      </Card>
    </div>
  );
}
