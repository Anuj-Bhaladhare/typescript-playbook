/**
 * TYPESCRIPT COMPLETE LEARNING REFERENCE
 * Beginner → Intermediate → Advanced
 *
 * How to run:
 *   1. Install Node.js.
 *   2. Install TypeScript: npm install -g typescript
 *   3. Save this file as typescript_complete_guide.ts
 *   4. Check types: tsc --noEmit typescript_complete_guide.ts
 *   5. Run it (one option): npx tsx typescript_complete_guide.ts
 *
 * Notes:
 * - Each section follows: TOPIC → DESCRIPTION / USE CASES → CODE → EXPECTED OUTPUT.
 * - Expected output is shown in comments.
 * - Some sections demonstrate compile-time errors. They are written as comments so the
 *   complete file can compile and run without intentional errors.
 * - TypeScript types are checked at compile time and are generally removed at runtime.
 */

// ============================================================================
// 1. BASIC TYPES: number, string, boolean
// ----------------------------------------------------------------------------
// Description:
//   Primitive types describe the kind of value a variable can hold.
// Use cases:
//   IDs, names, prices, flags, counts, and other predictable values.
// Code:
let age: number = 26;
let personName: string = "Anuj";
let isOnline: boolean = false;

console.log("1. Basic types:", age, personName, isOnline);
// Expected output:
// 1. Basic types: 26 Anuj false


// ============================================================================
// 2. TYPE INFERENCE
// ----------------------------------------------------------------------------
// Description:
//   TypeScript can infer a variable's type from its initial value.
// Use cases:
//   Keep code concise when the type is obvious.
// Code:
let inferredNumber = 85; // inferred as number
// inferredNumber = "Anuj"; // Error: string is not assignable to number

console.log("2. Type inference:", inferredNumber);
// Expected output:
// 2. Type inference: 85


// ============================================================================
// 3. TYPE ANNOTATIONS / EXPLICIT DECLARATIONS
// ----------------------------------------------------------------------------
// Description:
//   Add a type annotation when declaring a variable or parameter.
// Use cases:
//   Make intent clear, declare a variable before assigning its value, and define APIs.
// Code:
let declaredNumber: number;
declaredNumber = 62;

let declaredText: string = "TypeScript";

console.log("3. Type annotations:", declaredNumber, declaredText);
// Expected output:
// 3. Type annotations: 62 TypeScript


// ============================================================================
// 4. ARRAYS
// ----------------------------------------------------------------------------
// Description:
//   An array type specifies the type of each item in an array.
// Use cases:
//   Lists of numbers, names, products, IDs, and records.
// Code:
const numbers: number[] = [55, 56, 23];
const names: string[] = ["Anuj", "Sneha"];
const scores: Array<number> = [80, 91, 76]; // Generic array syntax

console.log("4. Arrays:", numbers, names, scores);
// Expected output:
// 4. Arrays: [ 55, 56, 23 ] [ 'Anuj', 'Sneha' ] [ 80, 91, 76 ]


// ============================================================================
// 5. TUPLES
// ----------------------------------------------------------------------------
// Description:
//   A tuple describes an array with a fixed sequence of element types.
// Use cases:
//   Coordinates, fixed-format records, or a value with a known structure.
// Code:
const userTuple: [number, boolean, string] = [45, false, "Anuj"];

console.log("5. Tuple:", userTuple);
// Expected output:
// 5. Tuple: [ 45, false, 'Anuj' ]


// ============================================================================
// 6. ENUMS
// ----------------------------------------------------------------------------
// Description:
//   An enum gives readable names to a set of constant values.
// Use cases:
//   Roles, order states, and fixed categories. String unions are often a simpler
//   alternative for many application-level cases.
// Code:
enum UserRole {
  User = "USER",
  Admin = "ADMIN",
}
const currentRole: UserRole = UserRole.Admin;

console.log("6. Enum:", currentRole);
// Expected output:
// 6. Enum: ADMIN


// ============================================================================
// 7. ANY, UNKNOWN, AND NEVER
// ----------------------------------------------------------------------------
// Description:
//   any disables most type checking; unknown requires checking before use;
//   never represents a value that cannot occur or a function that never returns.
// Use cases:
//   unknown is useful for untrusted API/JSON input. Avoid any unless necessary.
// Code:
let flexibleValue: any = "Anuj";
flexibleValue = 25;
flexibleValue = false;

let unknownValue: unknown = "hello";
if (typeof unknownValue === "string") {
  console.log("7. Unknown after checking:", unknownValue.toUpperCase());
}

function throwError(message: string): never {
  throw new Error(message);
}

// Expected output:
// 7. Unknown after checking: HELLO
// Note: throwError("stop") would throw an error, so it is not called here.


// ============================================================================
// 8. VOID AND FUNCTION TYPES
// ----------------------------------------------------------------------------
// Description:
//   void is used when a function does not return a useful value.
//   Function types describe the types of parameters and return values.
// Use cases:
//   Logging, event handlers, callbacks, and reusable operations.
// Code:
function logMessage(message: string): void {
  console.log("8. Message:", message);
}

type MathOperation = (left: number, right: number) => number;
const add: MathOperation = (left, right) => left + right;

logMessage("Learning TypeScript");
console.log("8. Add:", add(10, 5));
// Expected output:
// 8. Message: Learning TypeScript
// 8. Add: 15


// ============================================================================
// 9. FUNCTIONS: PARAMETERS, RETURN TYPES, OPTIONAL AND DEFAULT PARAMETERS
// ----------------------------------------------------------------------------
// Description:
//   Explicitly type parameters and return values. Use ? for optional parameters
//   and a default value when an argument can be omitted.
// Use cases:
//   Service functions, utilities, handlers, and business logic.
// Code:
const describePerson = (
  name: string,
  personAge: number,
  city?: string,
): string => {
  return `${name}, age ${personAge}${city ? `, from ${city}` : ""}`;
};

function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log("9. Function:", describePerson("Anuj", 26, "Nagpur"));
console.log("9. Default parameter:", greet("Sneha"));
// Expected output:
// 9. Function: Anuj, age 26, from Nagpur
// 9. Default parameter: Hello, Sneha!


// ============================================================================
// 10. UNION TYPES
// ----------------------------------------------------------------------------
// Description:
//   A union (A | B) means a value may be one of the listed types.
// Use cases:
//   Values that may arrive in different formats, such as an ID as a number or string.
// Code:
type StringOrNumber = number | string;
let userId: StringOrNumber = 55;
userId = "USR-55";

console.log("10. Union:", userId);
// Expected output:
// 10. Union: USR-55


// ============================================================================
// 11. LITERAL TYPES
// ----------------------------------------------------------------------------
// Description:
//   Literal types limit a value to exact strings, numbers, or booleans.
// Use cases:
//   Status values, modes, sizes, and restricted options.
// Code:
type RequestStatus = "success" | "error" | "pending";
let requestStatus: RequestStatus = "pending";
requestStatus = "success";
// requestStatus = "done"; // Error: "done" is not an allowed status.

console.log("11. Literal type:", requestStatus);
// Expected output:
// 11. Literal type: success


// ============================================================================
// 12. OBJECT TYPES AND OPTIONAL PROPERTIES
// ----------------------------------------------------------------------------
// Description:
//   Object types describe the required and optional properties of an object.
// Use cases:
//   User profiles, posts, products, API payloads, and configuration objects.
// Code:
type Post = {
  name: string;
  age: number;
  description: string;
  image?: string;
};

const post: Post = {
  name: "Anuj",
  age: 26,
  description: "I am a software engineer",
};

console.log("12. Object:", post);
// Expected output:
// 12. Object: { name: 'Anuj', age: 26, description: 'I am a software engineer' }


// ============================================================================
// 13. TYPE ALIASES
// ----------------------------------------------------------------------------
// Description:
//   type creates a name for a type. A type alias is a definition, not a variable.
// Use cases:
//   Reuse unions, object shapes, tuples, and complex type expressions.
// Code:
type CustomValue = number | string;
const customNumber: CustomValue = 55;
const customText: CustomValue = "Anuj";

console.log("13. Type aliases:", customNumber, customText);
// Expected output:
// 13. Type aliases: 55 Anuj


// ============================================================================
// 14. INTERFACES
// ----------------------------------------------------------------------------
// Description:
//   An interface describes the shape of an object. Use interface Name { ... };
//   do not use `interface A = ...`.
// Use cases:
//   Object contracts for application models, classes, and service boundaries.
// Code:
interface User {
  name: string;
  age: number;
  email?: string;
}

const user: User = {
  name: "Anuj",
  age: 26,
};

console.log("14. Interface:", user);
// Expected output:
// 14. Interface: { name: 'Anuj', age: 26 }


// ============================================================================
// 15. INTERFACE EXTENSION
// ----------------------------------------------------------------------------
// Description:
//   An interface can extend another interface to reuse and add properties.
// Use cases:
//   Admin users, specialized entities, and extending shared models.
// Code:
interface BasicEntity {
  id: number;
}

interface AdminEntity extends BasicEntity {
  adminName: string;
}

const admin: AdminEntity = { id: 1, adminName: "Anuj" };

console.log("15. Interface extension:", admin);
// Expected output:
// 15. Interface extension: { id: 1, adminName: 'Anuj' }


// ============================================================================
// 16. INTERSECTION TYPES
// ----------------------------------------------------------------------------
// Description:
//   An intersection (A & B) combines the requirements of multiple types.
// Use cases:
//   Compose object types from reusable parts.
// Code:
type HasName = { name: string };
type HasAge = { age: number };
type NamedPerson = HasName & HasAge;

const person: NamedPerson = { name: "Anuj", age: 26 };

console.log("16. Intersection:", person);
// Expected output:
// 16. Intersection: { name: 'Anuj', age: 26 }


// ============================================================================
// 17. TYPE ALIAS VS INTERFACE
// ----------------------------------------------------------------------------
// Description:
//   Both can describe object shapes. Interfaces are extendable and can be
//   declaration-merged; type aliases support unions, intersections, and primitives.
// Use cases:
//   Use either consistently for object contracts; use type for unions and compositions.
// Code:
interface Vehicle {
  brand: string;
}
type VehicleState = "moving" | "parked";
const vehicle: Vehicle = { brand: "Tata" };
const vehicleState: VehicleState = "parked";

console.log("17. Interface/type:", vehicle, vehicleState);
// Expected output:
// 17. Interface/type: { brand: 'Tata' } parked


// ============================================================================
// 18. TYPE NARROWING AND TYPE GUARDS
// ----------------------------------------------------------------------------
// Description:
//   Narrowing uses checks such as typeof, in, instanceof, or custom predicates
//   to determine a more specific type within a code branch.
// Use cases:
//   Safely process union types and untrusted data.
// Code:
function printId(id: string | number): string {
  if (typeof id === "number") {
    return `Numeric ID: ${id.toFixed(0)}`;
  }
  return `Text ID: ${id.toUpperCase()}`;
}

console.log("18. Narrowing:", printId("usr-10"), printId(10));
// Expected output:
// 18. Narrowing: Text ID: USR-10 Numeric ID: 10


// ============================================================================
// 19. DISCRIMINATED UNIONS
// ----------------------------------------------------------------------------
// Description:
//   Objects in a union share a literal property that identifies their variant.
// Use cases:
//   API results, UI states, payment states, and event payloads.
// Code:
type ApiResult =
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function readResult(result: ApiResult): string {
  if (result.status === "success") return result.data;
  return result.message;
}

console.log("19. Discriminated union:", readResult({ status: "success", data: "Loaded" }));
// Expected output:
// 19. Discriminated union: Loaded


// ============================================================================
// 20. NULL, UNDEFINED, AND NULLABLE VALUES
// ----------------------------------------------------------------------------
// Description:
//   null and undefined represent missing values. With strictNullChecks enabled,
//   TypeScript requires you to handle them.
// Use cases:
//   Optional API fields, search results, and values that may not exist.
// Code:
function getDisplayName(name: string | null | undefined): string {
  return name ?? "Guest";
}

console.log("20. Null handling:", getDisplayName(null), getDisplayName("Anuj"));
// Expected output:
// 20. Null handling: Guest Anuj


// ============================================================================
// 21. TYPE ASSERTIONS AND THE SATISFIES OPERATOR
// ----------------------------------------------------------------------------
// Description:
//   An assertion tells TypeScript how you intend to treat a value; it does not
//   perform runtime validation. `satisfies` checks compatibility while preserving
//   a useful inferred type.
// Use cases:
//   Working with DOM elements and validating configuration objects.
// Code:
const appConfig = {
  mode: "development",
  retries: 3,
} satisfies { mode: string; retries: number };

const someValue: unknown = "TypeScript";
const assertedText = someValue as string; // Use only when you know it is a string.

console.log("21. Assertion/satisfies:", assertedText, appConfig.retries);
// Expected output:
// 21. Assertion/satisfies: TypeScript 3


// ============================================================================
// 22. READONLY AND CONST ASSERTIONS
// ----------------------------------------------------------------------------
// Description:
//   readonly prevents reassignment through a typed property; `as const` preserves
//   literal values and marks object properties/array elements readonly.
// Use cases:
//   Constants, configuration, fixed tuples, and immutable data conventions.
// Code:
type Coordinates = readonly [number, number];
const point: Coordinates = [10, 20];

const directions = ["north", "south"] as const;

console.log("22. Readonly:", point, directions);
// Expected output:
// 22. Readonly: [ 10, 20 ] [ 'north', 'south' ]


// ============================================================================
// 23. GENERICS
// ----------------------------------------------------------------------------
// Description:
//   Generics let types depend on other types, preserving type information instead
//   of falling back to any.
// Use cases:
//   Reusable helpers, API responses, collections, and data structures.
// Code:
function identity<T>(value: T): T {
  return value;
}

type ApiResponse<T> = {
  data: T;
  success: boolean;
};

const identityResult = identity<string>("Hello");
const apiResponse: ApiResponse<User> = {
  data: { name: "Anuj", age: 26 },
  success: true,
};

console.log("23. Generics:", identityResult, apiResponse.data.name);
// Expected output:
// 23. Generics: Hello Anuj


// ============================================================================
// 24. GENERIC CONSTRAINTS
// ----------------------------------------------------------------------------
// Description:
//   `extends` restricts a generic type to values that meet a required shape.
// Use cases:
//   Generic helpers that need to access a particular property.
// Code:
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log("24. Generic constraint:", getLength("TypeScript"), getLength([1, 2, 3]));
// Expected output:
// 24. Generic constraint: 10 3


// ============================================================================
// 25. KEYOF AND PROPERTY ACCESS
// ----------------------------------------------------------------------------
// Description:
//   keyof creates a union of an object's property keys.
// Use cases:
//   Type-safe property helpers and reusable form/table utilities.
// Code:
type UserKey = keyof User;

function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

console.log("25. keyof:", getProperty(user, "name"));
// Expected output:
// 25. keyof: Anuj


// ============================================================================
// 26. UTILITY TYPES: Partial, Required, Pick, Omit, Record, Readonly
// ----------------------------------------------------------------------------
// Description:
//   Built-in utility types transform existing types.
// Use cases:
//   Update payloads, selecting fields, excluding private fields, dictionaries,
//   and read-only models.
// Code:
type UserUpdate = Partial<User>;
type RequiredUser = Required<User>;
type UserSummary = Pick<User, "name" | "age">;
type UserWithoutAge = Omit<User, "age">;
type UserDirectory = Record<string, UserSummary>;
type ReadonlyUser = Readonly<User>;

const userUpdate: UserUpdate = { age: 27 };
const userSummary: UserSummary = { name: "Sneha", age: 25 };
const directory: UserDirectory = { anuj: { name: "Anuj", age: 26 } };

console.log("26. Utility types:", userUpdate, userSummary, directory.anuj);
// Expected output:
// 26. Utility types: { age: 27 } { name: 'Sneha', age: 25 } { name: 'Anuj', age: 26 }


// ============================================================================
// 27. MAPPED TYPES
// ----------------------------------------------------------------------------
// Description:
//   Mapped types create a new type by iterating over the keys of another type.
// Use cases:
//   Building reusable optional, readonly, or transformed versions of models.
// Code:
type OptionalFields<T> = {
  [K in keyof T]?: T[K];
};

type OptionalUser = OptionalFields<User>;
const optionalUser: OptionalUser = { name: "Anuj" };

console.log("27. Mapped type:", optionalUser);
// Expected output:
// 27. Mapped type: { name: 'Anuj' }


// ============================================================================
// 28. CONDITIONAL TYPES AND INFER
// ----------------------------------------------------------------------------
// Description:
//   Conditional types choose a type based on a type relationship. `infer` can
//   extract a type inside a conditional type.
// Use cases:
//   Advanced generic libraries and extracting function or promise result types.
// Code:
type IsString<T> = T extends string ? true : false;
type PromiseValue<T> = T extends Promise<infer U> ? U : T;

const isTextType: IsString<string> = true;
const plainValue: PromiseValue<Promise<number>> = 42;

console.log("28. Conditional types:", isTextType, plainValue);
// Expected output:
// 28. Conditional types: true 42


// ============================================================================
// 29. TEMPLATE LITERAL TYPES
// ----------------------------------------------------------------------------
// Description:
//   Build string types using template literal syntax.
// Use cases:
//   Event names, CSS units, key patterns, and strongly typed identifiers.
// Code:
type EventName = `on${Capitalize<"click" | "focus">}`;
const eventName: EventName = "onClick";

console.log("29. Template literal type:", eventName);
// Expected output:
// 29. Template literal type: onClick


// ============================================================================
// 30. CLASSES, CONSTRUCTORS, AND ACCESS MODIFIERS
// ----------------------------------------------------------------------------
// Description:
//   Classes define objects with data and behavior. public is the default;
//   private restricts access to the class; protected allows subclass access.
// Use cases:
//   Domain models, services, and object-oriented application code.
// Code:
class Employee {
  constructor(
    public name: string,
    private salary: number,
  ) {}

  getAnnualSalary(): number {
    return this.salary * 12;
  }
}

const employee = new Employee("Anuj", 50000);
console.log("30. Class:", employee.name, employee.getAnnualSalary());
// Expected output:
// 30. Class: Anuj 600000


// ============================================================================
// 31. INHERITANCE AND METHOD OVERRIDING
// ----------------------------------------------------------------------------
// Description:
//   A class can extend another class and override inherited behavior.
// Use cases:
//   Specialized classes that share common functionality.
// Code:
class Animal {
  speak(): string {
    return "Some sound";
  }
}

class Dog extends Animal {
  override speak(): string {
    return "Woof";
  }
}

console.log("31. Inheritance:", new Dog().speak());
// Expected output:
// 31. Inheritance: Woof


// ============================================================================
// 32. ABSTRACT CLASSES
// ----------------------------------------------------------------------------
// Description:
//   An abstract class cannot be instantiated directly and can require subclasses
//   to implement abstract members.
// Use cases:
//   Shared base behavior with required subclass-specific methods.
// Code:
abstract class Shape {
  abstract area(): number;
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }
}

console.log("32. Abstract class:", new Square(4).area());
// Expected output:
// 32. Abstract class: 16


// ============================================================================
// 33. IMPLEMENTING INTERFACES IN CLASSES
// ----------------------------------------------------------------------------
// Description:
//   `implements` checks that a class satisfies an interface contract.
// Use cases:
//   Services, repositories, storage providers, and test doubles.
// Code:
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log("33. Logger:", message);
  }
}

new ConsoleLogger().log("Application started");
// Expected output:
// 33. Logger: Application started


// ============================================================================
// 34. STATIC MEMBERS AND GETTERS
// ----------------------------------------------------------------------------
// Description:
//   static members belong to the class itself. Getters expose computed properties.
// Use cases:
//   Shared constants, factory helpers, and calculated read-only values.
// Code:
class Circle {
  static readonly PI = 3.14159;

  constructor(private radius: number) {}

  get area(): number {
    return Circle.PI * this.radius * this.radius;
  }
}

console.log("34. Static/getter:", new Circle(2).area.toFixed(2));
// Expected output:
// 34. Static/getter: 12.57


// ============================================================================
// 35. MODULES: EXPORT AND IMPORT
// ----------------------------------------------------------------------------
// Description:
//   Modules split code across files. Export declarations to share them and import
//   them where needed. This single-file example shows the export syntax.
// Use cases:
//   Organizing a real application into models, services, utilities, and routes.
// Code:
//   In user.ts:
//     export interface UserModel { id: number; name: string; }
//     export const appName = "My App";
//   In main.ts:
//     import { UserModel, appName } from "./user";
//     const example: UserModel = { id: 1, name: "Anuj" };
// Output:
//   No output from declarations alone.
// Note:
//   This guide is one file for learning. In a project, place modules in separate files.


// ============================================================================
// 36. ASYNC / AWAIT AND PROMISES
// ----------------------------------------------------------------------------
// Description:
//   Promise<T> represents a future value. async functions return promises;
//   await waits for a promise inside an async function.
// Use cases:
//   API calls, database operations, file handling, and other asynchronous work.
// Code:
async function getUserName(): Promise<string> {
  return "Anuj";
}

async function runAsyncExample(): Promise<void> {
  const result = await getUserName();
  console.log("36. Async:", result);
}

void runAsyncExample();
// Expected output:
// 36. Async: Anuj


// ============================================================================
// 37. ERROR HANDLING WITH UNKNOWN
// ----------------------------------------------------------------------------
// Description:
//   A caught error should be treated as unknown because JavaScript can throw
//   values that are not Error objects.
// Use cases:
//   Robust API, database, and application error handling.
// Code:
try {
  throw new Error("Example failure");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log("37. Error:", error.message);
  } else {
    console.log("37. Unknown error");
  }
}
// Expected output:
// 37. Error: Example failure


// ============================================================================
// 38. TYPE PREDICATES (CUSTOM TYPE GUARDS)
// ----------------------------------------------------------------------------
// Description:
//   A predicate `value is Type` tells TypeScript that a function checks a type.
// Use cases:
//   Validating unknown values and narrowing complex unions.
// Code:
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const maybeText: unknown = "verified";
if (isString(maybeText)) {
  console.log("38. Type predicate:", maybeText.toUpperCase());
}
// Expected output:
// 38. Type predicate: VERIFIED


// ============================================================================
// 39. ASSERTION FUNCTIONS
// ----------------------------------------------------------------------------
// Description:
//   An assertion function throws if a condition is not satisfied and informs
//   TypeScript about the condition after it succeeds.
// Use cases:
//   Validating required application state before proceeding.
// Code:
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new TypeError("Expected a string");
  }
}

const externalValue: unknown = "safe";
assertIsString(externalValue);
console.log("39. Assertion function:", externalValue.toUpperCase());
// Expected output:
// 39. Assertion function: SAFE


// ============================================================================
// 40. REST PARAMETERS AND SPREAD
// ----------------------------------------------------------------------------
// Description:
//   Rest parameters collect multiple arguments into an array. Spread expands an
//   iterable or object into another call or value.
// Use cases:
//   Utility functions, combining arrays, and object updates.
// Code:
function sum(...values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

const oldNumbers = [1, 2];
const combinedNumbers = [...oldNumbers, 3];

console.log("40. Rest/spread:", sum(1, 2, 3), combinedNumbers);
// Expected output:
// 40. Rest/spread: 6 [ 1, 2, 3 ]


// ============================================================================
// 41. DESTRUCTURING WITH TYPES
// ----------------------------------------------------------------------------
// Description:
//   Destructuring extracts properties from objects or values from arrays.
//   Types can be declared on the variables or function parameters.
// Use cases:
//   Cleaner access to function arguments and object properties.
// Code:
const profile = { name: "Anuj", city: "Nagpur" };
const { name: profileName, city } = profile;

console.log("41. Destructuring:", profileName, city);
// Expected output:
// 41. Destructuring: Anuj Nagpur


// ============================================================================
// 42. INDEX SIGNATURES
// ----------------------------------------------------------------------------
// Description:
//   An index signature describes objects with dynamic keys and a consistent value type.
// Use cases:
//   Dictionaries, maps represented as objects, and dynamic configuration.
// Code:
type ScoreMap = {
  [studentName: string]: number;
};

const studentScores: ScoreMap = { Anuj: 90, Sneha: 95 };

console.log("42. Index signature:", studentScores.Sneha);
// Expected output:
// 42. Index signature: 95


// ============================================================================
// 43. OVERLOAD SIGNATURES
// ----------------------------------------------------------------------------
// Description:
//   Overloads describe multiple supported call patterns while one implementation
//   handles them.
// Use cases:
//   Functions that accept different input types and return matching output types.
// Code:
function formatValue(value: number): string;
function formatValue(value: string): string;
function formatValue(value: number | string): string {
  return String(value);
}

console.log("43. Overload:", formatValue(42), formatValue("hello"));
// Expected output:
// 43. Overload: 42 hello


// ============================================================================
// 44. ITERATORS AND FOR...OF
// ----------------------------------------------------------------------------
// Description:
//   for...of iterates over values in iterable collections such as arrays and strings.
// Use cases:
//   Processing rows, list items, and strings.
// Code:
const technologies = ["TypeScript", "React", "Node.js"];
for (const technology of technologies) {
  console.log("44. Technology:", technology);
}
// Expected output:
// 44. Technology: TypeScript
// 44. Technology: React
// 44. Technology: Node.js


// ============================================================================
// 45. DOM TYPES (BROWSER PROJECTS)
// ----------------------------------------------------------------------------
// Description:
//   TypeScript provides DOM types such as HTMLElement and HTMLInputElement.
//   Check for null before using an element returned by querySelector.
// Use cases:
//   Browser forms, buttons, and UI interactions.
// Code:
//   const input = document.querySelector<HTMLInputElement>("#email");
//   if (input) {
//     console.log(input.value);
//   }
// Output:
//   Depends on the HTML page and the input's value.
// Note: This example is commented out so the file can run in Node.js too.


// ============================================================================
// 46. JSON PARSING AND RUNTIME VALIDATION
// ----------------------------------------------------------------------------
// Description:
//   JSON.parse returns an untrusted value in practice. A TypeScript assertion alone
//   does not validate it; check the shape at runtime.
// Use cases:
//   External API responses, configuration files, and imported data.
// Code:
function parseName(json: string): string | null {
  const value: unknown = JSON.parse(json);
  if (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    typeof value.name === "string"
  ) {
    return value.name;
  }
  return null;
}

console.log("46. Runtime validation:", parseName('{"name":"Anuj"}'));
// Expected output:
// 46. Runtime validation: Anuj


// ============================================================================
// 47. STRICT MODE AND tsconfig.json
// ----------------------------------------------------------------------------
// Description:
//   tsconfig.json configures the TypeScript compiler. Strict mode enables important
//   checks including strictNullChecks and noImplicitAny.
// Use cases:
//   All serious TypeScript projects, especially team and production applications.
// Suggested starter config (save separately as tsconfig.json):
// {
//   "compilerOptions": {
//     "target": "ES2022",
//     "module": "NodeNext",
//     "moduleResolution": "NodeNext",
//     "strict": true,
//     "noEmitOnError": true,
//     "outDir": "./dist",
//     "rootDir": "./src",
//     "esModuleInterop": true,
//     "skipLibCheck": true
//   },
//   "include": ["src/**/*.ts"]
// }
// Output:
//   No runtime output; this config controls type-checking and compilation.


// ============================================================================
// 48. COMMON TYPESCRIPT MISTAKES TO REMEMBER
// ----------------------------------------------------------------------------
// 1. `let x = 5; x = "hello";` is an error because x is inferred as number.
// 2. A type alias defines a type; it is not a variable to which you assign values.
//      Correct: type Custom = number | string;
//               const value: Custom = 55;
// 3. Correct interface syntax:
//      interface A { a: number; }
//      interface B extends A { b: string; }
// 4. Object property names must match exactly: `name` is different from `naem`.
// 5. `any` bypasses checking; prefer `unknown` when the type is not known.
// 6. `as SomeType` does not validate external data at runtime.
// 7. With strictNullChecks, handle null and undefined before accessing a value.
// 8. Use `===` for comparisons and `=` for assignment.
// 9. A type annotation does not convert a runtime value; it only checks types.
// 10. Prefer descriptive names such as UserRole and RequestStatus over all-lowercase
//     names for types and interfaces.


// ============================================================================
// 49. RECOMMENDED LEARNING ORDER
// ----------------------------------------------------------------------------
// Stage 1 — Fundamentals:
//   Primitive types, inference, annotations, arrays, tuples, enums, any/unknown,
//   functions, unions, literal types, object types, aliases, interfaces.
// Stage 2 — Everyday application TypeScript:
//   Optional properties, narrowing, null safety, discriminated unions, generics,
//   keyof, utility types, readonly, modules, async/await, error handling.
// Stage 3 — Object-oriented TypeScript:
//   Classes, access modifiers, inheritance, abstract classes, interfaces,
//   static members, getters, and setters.
// Stage 4 — Advanced types:
//   Mapped types, conditional types, infer, template literal types, overloads,
//   type predicates, assertion functions, and index signatures.
// Stage 5 — Real project skills:
//   tsconfig, strict mode, npm scripts, linting/formatting, testing, DOM types,
//   runtime validation, and TypeScript with React/Node.js.
// ============================================================================
