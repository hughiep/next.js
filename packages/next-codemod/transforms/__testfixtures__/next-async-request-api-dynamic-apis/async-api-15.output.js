import { cookies } from "next/headers";

async function MyComponent() {
  function asyncFunction() {
    callSomething(/* Next.js Dynamic Async API Codemod: Manually await this call, if it's a Server Component */
    cookies());
  }
}