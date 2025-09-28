
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Boards
 * 
 */
export type Boards = $Result.DefaultSelection<Prisma.$BoardsPayload>
/**
 * Model Columns
 * 
 */
export type Columns = $Result.DefaultSelection<Prisma.$ColumnsPayload>
/**
 * Model Cards
 * 
 */
export type Cards = $Result.DefaultSelection<Prisma.$CardsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Boards
 * const boards = await prisma.boards.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Boards
   * const boards = await prisma.boards.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.boards`: Exposes CRUD operations for the **Boards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.boards.findMany()
    * ```
    */
  get boards(): Prisma.BoardsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.columns`: Exposes CRUD operations for the **Columns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Columns
    * const columns = await prisma.columns.findMany()
    * ```
    */
  get columns(): Prisma.ColumnsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cards`: Exposes CRUD operations for the **Cards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.cards.findMany()
    * ```
    */
  get cards(): Prisma.CardsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Boards: 'Boards',
    Columns: 'Columns',
    Cards: 'Cards'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "boards" | "columns" | "cards"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Boards: {
        payload: Prisma.$BoardsPayload<ExtArgs>
        fields: Prisma.BoardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardsPayload>
          }
          findFirst: {
            args: Prisma.BoardsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardsPayload>
          }
          findMany: {
            args: Prisma.BoardsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardsPayload>[]
          }
          create: {
            args: Prisma.BoardsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardsPayload>
          }
          createMany: {
            args: Prisma.BoardsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoardsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardsPayload>[]
          }
          delete: {
            args: Prisma.BoardsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardsPayload>
          }
          update: {
            args: Prisma.BoardsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardsPayload>
          }
          deleteMany: {
            args: Prisma.BoardsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoardsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardsPayload>[]
          }
          upsert: {
            args: Prisma.BoardsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardsPayload>
          }
          aggregate: {
            args: Prisma.BoardsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoards>
          }
          groupBy: {
            args: Prisma.BoardsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardsCountArgs<ExtArgs>
            result: $Utils.Optional<BoardsCountAggregateOutputType> | number
          }
        }
      }
      Columns: {
        payload: Prisma.$ColumnsPayload<ExtArgs>
        fields: Prisma.ColumnsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColumnsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColumnsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnsPayload>
          }
          findFirst: {
            args: Prisma.ColumnsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColumnsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnsPayload>
          }
          findMany: {
            args: Prisma.ColumnsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnsPayload>[]
          }
          create: {
            args: Prisma.ColumnsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnsPayload>
          }
          createMany: {
            args: Prisma.ColumnsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColumnsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnsPayload>[]
          }
          delete: {
            args: Prisma.ColumnsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnsPayload>
          }
          update: {
            args: Prisma.ColumnsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnsPayload>
          }
          deleteMany: {
            args: Prisma.ColumnsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColumnsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColumnsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnsPayload>[]
          }
          upsert: {
            args: Prisma.ColumnsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnsPayload>
          }
          aggregate: {
            args: Prisma.ColumnsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumns>
          }
          groupBy: {
            args: Prisma.ColumnsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColumnsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColumnsCountArgs<ExtArgs>
            result: $Utils.Optional<ColumnsCountAggregateOutputType> | number
          }
        }
      }
      Cards: {
        payload: Prisma.$CardsPayload<ExtArgs>
        fields: Prisma.CardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          findFirst: {
            args: Prisma.CardsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          findMany: {
            args: Prisma.CardsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>[]
          }
          create: {
            args: Prisma.CardsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          createMany: {
            args: Prisma.CardsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>[]
          }
          delete: {
            args: Prisma.CardsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          update: {
            args: Prisma.CardsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          deleteMany: {
            args: Prisma.CardsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>[]
          }
          upsert: {
            args: Prisma.CardsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          aggregate: {
            args: Prisma.CardsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCards>
          }
          groupBy: {
            args: Prisma.CardsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardsCountArgs<ExtArgs>
            result: $Utils.Optional<CardsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    boards?: BoardsOmit
    columns?: ColumnsOmit
    cards?: CardsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BoardsCountOutputType
   */

  export type BoardsCountOutputType = {
    columns: number
  }

  export type BoardsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    columns?: boolean | BoardsCountOutputTypeCountColumnsArgs
  }

  // Custom InputTypes
  /**
   * BoardsCountOutputType without action
   */
  export type BoardsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardsCountOutputType
     */
    select?: BoardsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardsCountOutputType without action
   */
  export type BoardsCountOutputTypeCountColumnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnsWhereInput
  }


  /**
   * Count Type ColumnsCountOutputType
   */

  export type ColumnsCountOutputType = {
    cards: number
  }

  export type ColumnsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | ColumnsCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * ColumnsCountOutputType without action
   */
  export type ColumnsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnsCountOutputType
     */
    select?: ColumnsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColumnsCountOutputType without action
   */
  export type ColumnsCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Boards
   */

  export type AggregateBoards = {
    _count: BoardsCountAggregateOutputType | null
    _min: BoardsMinAggregateOutputType | null
    _max: BoardsMaxAggregateOutputType | null
  }

  export type BoardsMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardsCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoardsMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardsMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardsCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to aggregate.
     */
    where?: BoardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardsOrderByWithRelationInput | BoardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardsMaxAggregateInputType
  }

  export type GetBoardsAggregateType<T extends BoardsAggregateArgs> = {
        [P in keyof T & keyof AggregateBoards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoards[P]>
      : GetScalarType<T[P], AggregateBoards[P]>
  }




  export type BoardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardsWhereInput
    orderBy?: BoardsOrderByWithAggregationInput | BoardsOrderByWithAggregationInput[]
    by: BoardsScalarFieldEnum[] | BoardsScalarFieldEnum
    having?: BoardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardsCountAggregateInputType | true
    _min?: BoardsMinAggregateInputType
    _max?: BoardsMaxAggregateInputType
  }

  export type BoardsGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
    _count: BoardsCountAggregateOutputType | null
    _min: BoardsMinAggregateOutputType | null
    _max: BoardsMaxAggregateOutputType | null
  }

  type GetBoardsGroupByPayload<T extends BoardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardsGroupByOutputType[P]>
            : GetScalarType<T[P], BoardsGroupByOutputType[P]>
        }
      >
    >


  export type BoardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    columns?: boolean | Boards$columnsArgs<ExtArgs>
    _count?: boolean | BoardsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boards"]>

  export type BoardsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["boards"]>

  export type BoardsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["boards"]>

  export type BoardsSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoardsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["boards"]>
  export type BoardsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    columns?: boolean | Boards$columnsArgs<ExtArgs>
    _count?: boolean | BoardsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoardsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BoardsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BoardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Boards"
    objects: {
      columns: Prisma.$ColumnsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["boards"]>
    composites: {}
  }

  type BoardsGetPayload<S extends boolean | null | undefined | BoardsDefaultArgs> = $Result.GetResult<Prisma.$BoardsPayload, S>

  type BoardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardsCountAggregateInputType | true
    }

  export interface BoardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Boards'], meta: { name: 'Boards' } }
    /**
     * Find zero or one Boards that matches the filter.
     * @param {BoardsFindUniqueArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardsFindUniqueArgs>(args: SelectSubset<T, BoardsFindUniqueArgs<ExtArgs>>): Prisma__BoardsClient<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Boards that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardsFindUniqueOrThrowArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardsFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardsClient<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardsFindFirstArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardsFindFirstArgs>(args?: SelectSubset<T, BoardsFindFirstArgs<ExtArgs>>): Prisma__BoardsClient<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardsFindFirstOrThrowArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardsFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardsClient<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.boards.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.boards.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardsWithIdOnly = await prisma.boards.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardsFindManyArgs>(args?: SelectSubset<T, BoardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Boards.
     * @param {BoardsCreateArgs} args - Arguments to create a Boards.
     * @example
     * // Create one Boards
     * const Boards = await prisma.boards.create({
     *   data: {
     *     // ... data to create a Boards
     *   }
     * })
     * 
     */
    create<T extends BoardsCreateArgs>(args: SelectSubset<T, BoardsCreateArgs<ExtArgs>>): Prisma__BoardsClient<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {BoardsCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const boards = await prisma.boards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardsCreateManyArgs>(args?: SelectSubset<T, BoardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boards and returns the data saved in the database.
     * @param {BoardsCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const boards = await prisma.boards.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boards and only return the `id`
     * const boardsWithIdOnly = await prisma.boards.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoardsCreateManyAndReturnArgs>(args?: SelectSubset<T, BoardsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Boards.
     * @param {BoardsDeleteArgs} args - Arguments to delete one Boards.
     * @example
     * // Delete one Boards
     * const Boards = await prisma.boards.delete({
     *   where: {
     *     // ... filter to delete one Boards
     *   }
     * })
     * 
     */
    delete<T extends BoardsDeleteArgs>(args: SelectSubset<T, BoardsDeleteArgs<ExtArgs>>): Prisma__BoardsClient<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Boards.
     * @param {BoardsUpdateArgs} args - Arguments to update one Boards.
     * @example
     * // Update one Boards
     * const boards = await prisma.boards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardsUpdateArgs>(args: SelectSubset<T, BoardsUpdateArgs<ExtArgs>>): Prisma__BoardsClient<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {BoardsDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.boards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardsDeleteManyArgs>(args?: SelectSubset<T, BoardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const boards = await prisma.boards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardsUpdateManyArgs>(args: SelectSubset<T, BoardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards and returns the data updated in the database.
     * @param {BoardsUpdateManyAndReturnArgs} args - Arguments to update many Boards.
     * @example
     * // Update many Boards
     * const boards = await prisma.boards.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boards and only return the `id`
     * const boardsWithIdOnly = await prisma.boards.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoardsUpdateManyAndReturnArgs>(args: SelectSubset<T, BoardsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Boards.
     * @param {BoardsUpsertArgs} args - Arguments to update or create a Boards.
     * @example
     * // Update or create a Boards
     * const boards = await prisma.boards.upsert({
     *   create: {
     *     // ... data to create a Boards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boards we want to update
     *   }
     * })
     */
    upsert<T extends BoardsUpsertArgs>(args: SelectSubset<T, BoardsUpsertArgs<ExtArgs>>): Prisma__BoardsClient<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardsCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.boards.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardsCountArgs>(
      args?: Subset<T, BoardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardsAggregateArgs>(args: Subset<T, BoardsAggregateArgs>): Prisma.PrismaPromise<GetBoardsAggregateType<T>>

    /**
     * Group by Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardsGroupByArgs['orderBy'] }
        : { orderBy?: BoardsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Boards model
   */
  readonly fields: BoardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Boards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    columns<T extends Boards$columnsArgs<ExtArgs> = {}>(args?: Subset<T, Boards$columnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Boards model
   */
  interface BoardsFieldRefs {
    readonly id: FieldRef<"Boards", 'String'>
    readonly title: FieldRef<"Boards", 'String'>
    readonly createdAt: FieldRef<"Boards", 'DateTime'>
    readonly updatedAt: FieldRef<"Boards", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Boards findUnique
   */
  export type BoardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardsInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where: BoardsWhereUniqueInput
  }

  /**
   * Boards findUniqueOrThrow
   */
  export type BoardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardsInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where: BoardsWhereUniqueInput
  }

  /**
   * Boards findFirst
   */
  export type BoardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardsInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardsOrderByWithRelationInput | BoardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardsScalarFieldEnum | BoardsScalarFieldEnum[]
  }

  /**
   * Boards findFirstOrThrow
   */
  export type BoardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardsInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardsOrderByWithRelationInput | BoardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardsScalarFieldEnum | BoardsScalarFieldEnum[]
  }

  /**
   * Boards findMany
   */
  export type BoardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardsInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardsOrderByWithRelationInput | BoardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: BoardsScalarFieldEnum | BoardsScalarFieldEnum[]
  }

  /**
   * Boards create
   */
  export type BoardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardsInclude<ExtArgs> | null
    /**
     * The data needed to create a Boards.
     */
    data: XOR<BoardsCreateInput, BoardsUncheckedCreateInput>
  }

  /**
   * Boards createMany
   */
  export type BoardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardsCreateManyInput | BoardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boards createManyAndReturn
   */
  export type BoardsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * The data used to create many Boards.
     */
    data: BoardsCreateManyInput | BoardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boards update
   */
  export type BoardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardsInclude<ExtArgs> | null
    /**
     * The data needed to update a Boards.
     */
    data: XOR<BoardsUpdateInput, BoardsUncheckedUpdateInput>
    /**
     * Choose, which Boards to update.
     */
    where: BoardsWhereUniqueInput
  }

  /**
   * Boards updateMany
   */
  export type BoardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardsUpdateManyMutationInput, BoardsUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardsWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Boards updateManyAndReturn
   */
  export type BoardsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardsUpdateManyMutationInput, BoardsUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardsWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Boards upsert
   */
  export type BoardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardsInclude<ExtArgs> | null
    /**
     * The filter to search for the Boards to update in case it exists.
     */
    where: BoardsWhereUniqueInput
    /**
     * In case the Boards found by the `where` argument doesn't exist, create a new Boards with this data.
     */
    create: XOR<BoardsCreateInput, BoardsUncheckedCreateInput>
    /**
     * In case the Boards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardsUpdateInput, BoardsUncheckedUpdateInput>
  }

  /**
   * Boards delete
   */
  export type BoardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardsInclude<ExtArgs> | null
    /**
     * Filter which Boards to delete.
     */
    where: BoardsWhereUniqueInput
  }

  /**
   * Boards deleteMany
   */
  export type BoardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardsWhereInput
    /**
     * Limit how many Boards to delete.
     */
    limit?: number
  }

  /**
   * Boards.columns
   */
  export type Boards$columnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsInclude<ExtArgs> | null
    where?: ColumnsWhereInput
    orderBy?: ColumnsOrderByWithRelationInput | ColumnsOrderByWithRelationInput[]
    cursor?: ColumnsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColumnsScalarFieldEnum | ColumnsScalarFieldEnum[]
  }

  /**
   * Boards without action
   */
  export type BoardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boards
     */
    select?: BoardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boards
     */
    omit?: BoardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardsInclude<ExtArgs> | null
  }


  /**
   * Model Columns
   */

  export type AggregateColumns = {
    _count: ColumnsCountAggregateOutputType | null
    _avg: ColumnsAvgAggregateOutputType | null
    _sum: ColumnsSumAggregateOutputType | null
    _min: ColumnsMinAggregateOutputType | null
    _max: ColumnsMaxAggregateOutputType | null
  }

  export type ColumnsAvgAggregateOutputType = {
    order: number | null
    width: number | null
  }

  export type ColumnsSumAggregateOutputType = {
    order: number | null
    width: number | null
  }

  export type ColumnsMinAggregateOutputType = {
    id: string | null
    title: string | null
    boardId: string | null
    order: number | null
    width: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColumnsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    boardId: string | null
    order: number | null
    width: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColumnsCountAggregateOutputType = {
    id: number
    title: number
    boardId: number
    order: number
    width: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ColumnsAvgAggregateInputType = {
    order?: true
    width?: true
  }

  export type ColumnsSumAggregateInputType = {
    order?: true
    width?: true
  }

  export type ColumnsMinAggregateInputType = {
    id?: true
    title?: true
    boardId?: true
    order?: true
    width?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColumnsMaxAggregateInputType = {
    id?: true
    title?: true
    boardId?: true
    order?: true
    width?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColumnsCountAggregateInputType = {
    id?: true
    title?: true
    boardId?: true
    order?: true
    width?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ColumnsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Columns to aggregate.
     */
    where?: ColumnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnsOrderByWithRelationInput | ColumnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColumnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Columns
    **/
    _count?: true | ColumnsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColumnsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColumnsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColumnsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColumnsMaxAggregateInputType
  }

  export type GetColumnsAggregateType<T extends ColumnsAggregateArgs> = {
        [P in keyof T & keyof AggregateColumns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumns[P]>
      : GetScalarType<T[P], AggregateColumns[P]>
  }




  export type ColumnsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnsWhereInput
    orderBy?: ColumnsOrderByWithAggregationInput | ColumnsOrderByWithAggregationInput[]
    by: ColumnsScalarFieldEnum[] | ColumnsScalarFieldEnum
    having?: ColumnsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColumnsCountAggregateInputType | true
    _avg?: ColumnsAvgAggregateInputType
    _sum?: ColumnsSumAggregateInputType
    _min?: ColumnsMinAggregateInputType
    _max?: ColumnsMaxAggregateInputType
  }

  export type ColumnsGroupByOutputType = {
    id: string
    title: string
    boardId: string
    order: number
    width: number
    createdAt: Date
    updatedAt: Date
    _count: ColumnsCountAggregateOutputType | null
    _avg: ColumnsAvgAggregateOutputType | null
    _sum: ColumnsSumAggregateOutputType | null
    _min: ColumnsMinAggregateOutputType | null
    _max: ColumnsMaxAggregateOutputType | null
  }

  type GetColumnsGroupByPayload<T extends ColumnsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColumnsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColumnsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColumnsGroupByOutputType[P]>
            : GetScalarType<T[P], ColumnsGroupByOutputType[P]>
        }
      >
    >


  export type ColumnsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    boardId?: boolean
    order?: boolean
    width?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | BoardsDefaultArgs<ExtArgs>
    cards?: boolean | Columns$cardsArgs<ExtArgs>
    _count?: boolean | ColumnsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["columns"]>

  export type ColumnsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    boardId?: boolean
    order?: boolean
    width?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | BoardsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["columns"]>

  export type ColumnsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    boardId?: boolean
    order?: boolean
    width?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | BoardsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["columns"]>

  export type ColumnsSelectScalar = {
    id?: boolean
    title?: boolean
    boardId?: boolean
    order?: boolean
    width?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ColumnsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "boardId" | "order" | "width" | "createdAt" | "updatedAt", ExtArgs["result"]["columns"]>
  export type ColumnsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardsDefaultArgs<ExtArgs>
    cards?: boolean | Columns$cardsArgs<ExtArgs>
    _count?: boolean | ColumnsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ColumnsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardsDefaultArgs<ExtArgs>
  }
  export type ColumnsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardsDefaultArgs<ExtArgs>
  }

  export type $ColumnsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Columns"
    objects: {
      board: Prisma.$BoardsPayload<ExtArgs>
      cards: Prisma.$CardsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      boardId: string
      order: number
      width: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["columns"]>
    composites: {}
  }

  type ColumnsGetPayload<S extends boolean | null | undefined | ColumnsDefaultArgs> = $Result.GetResult<Prisma.$ColumnsPayload, S>

  type ColumnsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColumnsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColumnsCountAggregateInputType | true
    }

  export interface ColumnsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Columns'], meta: { name: 'Columns' } }
    /**
     * Find zero or one Columns that matches the filter.
     * @param {ColumnsFindUniqueArgs} args - Arguments to find a Columns
     * @example
     * // Get one Columns
     * const columns = await prisma.columns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColumnsFindUniqueArgs>(args: SelectSubset<T, ColumnsFindUniqueArgs<ExtArgs>>): Prisma__ColumnsClient<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Columns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColumnsFindUniqueOrThrowArgs} args - Arguments to find a Columns
     * @example
     * // Get one Columns
     * const columns = await prisma.columns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColumnsFindUniqueOrThrowArgs>(args: SelectSubset<T, ColumnsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColumnsClient<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Columns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnsFindFirstArgs} args - Arguments to find a Columns
     * @example
     * // Get one Columns
     * const columns = await prisma.columns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColumnsFindFirstArgs>(args?: SelectSubset<T, ColumnsFindFirstArgs<ExtArgs>>): Prisma__ColumnsClient<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Columns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnsFindFirstOrThrowArgs} args - Arguments to find a Columns
     * @example
     * // Get one Columns
     * const columns = await prisma.columns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColumnsFindFirstOrThrowArgs>(args?: SelectSubset<T, ColumnsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColumnsClient<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Columns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Columns
     * const columns = await prisma.columns.findMany()
     * 
     * // Get first 10 Columns
     * const columns = await prisma.columns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const columnsWithIdOnly = await prisma.columns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColumnsFindManyArgs>(args?: SelectSubset<T, ColumnsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Columns.
     * @param {ColumnsCreateArgs} args - Arguments to create a Columns.
     * @example
     * // Create one Columns
     * const Columns = await prisma.columns.create({
     *   data: {
     *     // ... data to create a Columns
     *   }
     * })
     * 
     */
    create<T extends ColumnsCreateArgs>(args: SelectSubset<T, ColumnsCreateArgs<ExtArgs>>): Prisma__ColumnsClient<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Columns.
     * @param {ColumnsCreateManyArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const columns = await prisma.columns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColumnsCreateManyArgs>(args?: SelectSubset<T, ColumnsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Columns and returns the data saved in the database.
     * @param {ColumnsCreateManyAndReturnArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const columns = await prisma.columns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Columns and only return the `id`
     * const columnsWithIdOnly = await prisma.columns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColumnsCreateManyAndReturnArgs>(args?: SelectSubset<T, ColumnsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Columns.
     * @param {ColumnsDeleteArgs} args - Arguments to delete one Columns.
     * @example
     * // Delete one Columns
     * const Columns = await prisma.columns.delete({
     *   where: {
     *     // ... filter to delete one Columns
     *   }
     * })
     * 
     */
    delete<T extends ColumnsDeleteArgs>(args: SelectSubset<T, ColumnsDeleteArgs<ExtArgs>>): Prisma__ColumnsClient<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Columns.
     * @param {ColumnsUpdateArgs} args - Arguments to update one Columns.
     * @example
     * // Update one Columns
     * const columns = await prisma.columns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColumnsUpdateArgs>(args: SelectSubset<T, ColumnsUpdateArgs<ExtArgs>>): Prisma__ColumnsClient<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Columns.
     * @param {ColumnsDeleteManyArgs} args - Arguments to filter Columns to delete.
     * @example
     * // Delete a few Columns
     * const { count } = await prisma.columns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColumnsDeleteManyArgs>(args?: SelectSubset<T, ColumnsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Columns
     * const columns = await prisma.columns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColumnsUpdateManyArgs>(args: SelectSubset<T, ColumnsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns and returns the data updated in the database.
     * @param {ColumnsUpdateManyAndReturnArgs} args - Arguments to update many Columns.
     * @example
     * // Update many Columns
     * const columns = await prisma.columns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Columns and only return the `id`
     * const columnsWithIdOnly = await prisma.columns.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColumnsUpdateManyAndReturnArgs>(args: SelectSubset<T, ColumnsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Columns.
     * @param {ColumnsUpsertArgs} args - Arguments to update or create a Columns.
     * @example
     * // Update or create a Columns
     * const columns = await prisma.columns.upsert({
     *   create: {
     *     // ... data to create a Columns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Columns we want to update
     *   }
     * })
     */
    upsert<T extends ColumnsUpsertArgs>(args: SelectSubset<T, ColumnsUpsertArgs<ExtArgs>>): Prisma__ColumnsClient<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnsCountArgs} args - Arguments to filter Columns to count.
     * @example
     * // Count the number of Columns
     * const count = await prisma.columns.count({
     *   where: {
     *     // ... the filter for the Columns we want to count
     *   }
     * })
    **/
    count<T extends ColumnsCountArgs>(
      args?: Subset<T, ColumnsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColumnsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColumnsAggregateArgs>(args: Subset<T, ColumnsAggregateArgs>): Prisma.PrismaPromise<GetColumnsAggregateType<T>>

    /**
     * Group by Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColumnsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColumnsGroupByArgs['orderBy'] }
        : { orderBy?: ColumnsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColumnsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Columns model
   */
  readonly fields: ColumnsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Columns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColumnsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardsDefaultArgs<ExtArgs>>): Prisma__BoardsClient<$Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cards<T extends Columns$cardsArgs<ExtArgs> = {}>(args?: Subset<T, Columns$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Columns model
   */
  interface ColumnsFieldRefs {
    readonly id: FieldRef<"Columns", 'String'>
    readonly title: FieldRef<"Columns", 'String'>
    readonly boardId: FieldRef<"Columns", 'String'>
    readonly order: FieldRef<"Columns", 'Int'>
    readonly width: FieldRef<"Columns", 'Int'>
    readonly createdAt: FieldRef<"Columns", 'DateTime'>
    readonly updatedAt: FieldRef<"Columns", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Columns findUnique
   */
  export type ColumnsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsInclude<ExtArgs> | null
    /**
     * Filter, which Columns to fetch.
     */
    where: ColumnsWhereUniqueInput
  }

  /**
   * Columns findUniqueOrThrow
   */
  export type ColumnsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsInclude<ExtArgs> | null
    /**
     * Filter, which Columns to fetch.
     */
    where: ColumnsWhereUniqueInput
  }

  /**
   * Columns findFirst
   */
  export type ColumnsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsInclude<ExtArgs> | null
    /**
     * Filter, which Columns to fetch.
     */
    where?: ColumnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnsOrderByWithRelationInput | ColumnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnsScalarFieldEnum | ColumnsScalarFieldEnum[]
  }

  /**
   * Columns findFirstOrThrow
   */
  export type ColumnsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsInclude<ExtArgs> | null
    /**
     * Filter, which Columns to fetch.
     */
    where?: ColumnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnsOrderByWithRelationInput | ColumnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnsScalarFieldEnum | ColumnsScalarFieldEnum[]
  }

  /**
   * Columns findMany
   */
  export type ColumnsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsInclude<ExtArgs> | null
    /**
     * Filter, which Columns to fetch.
     */
    where?: ColumnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnsOrderByWithRelationInput | ColumnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Columns.
     */
    cursor?: ColumnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    distinct?: ColumnsScalarFieldEnum | ColumnsScalarFieldEnum[]
  }

  /**
   * Columns create
   */
  export type ColumnsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsInclude<ExtArgs> | null
    /**
     * The data needed to create a Columns.
     */
    data: XOR<ColumnsCreateInput, ColumnsUncheckedCreateInput>
  }

  /**
   * Columns createMany
   */
  export type ColumnsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Columns.
     */
    data: ColumnsCreateManyInput | ColumnsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Columns createManyAndReturn
   */
  export type ColumnsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * The data used to create many Columns.
     */
    data: ColumnsCreateManyInput | ColumnsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Columns update
   */
  export type ColumnsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsInclude<ExtArgs> | null
    /**
     * The data needed to update a Columns.
     */
    data: XOR<ColumnsUpdateInput, ColumnsUncheckedUpdateInput>
    /**
     * Choose, which Columns to update.
     */
    where: ColumnsWhereUniqueInput
  }

  /**
   * Columns updateMany
   */
  export type ColumnsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnsUpdateManyMutationInput, ColumnsUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnsWhereInput
    /**
     * Limit how many Columns to update.
     */
    limit?: number
  }

  /**
   * Columns updateManyAndReturn
   */
  export type ColumnsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnsUpdateManyMutationInput, ColumnsUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnsWhereInput
    /**
     * Limit how many Columns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Columns upsert
   */
  export type ColumnsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsInclude<ExtArgs> | null
    /**
     * The filter to search for the Columns to update in case it exists.
     */
    where: ColumnsWhereUniqueInput
    /**
     * In case the Columns found by the `where` argument doesn't exist, create a new Columns with this data.
     */
    create: XOR<ColumnsCreateInput, ColumnsUncheckedCreateInput>
    /**
     * In case the Columns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColumnsUpdateInput, ColumnsUncheckedUpdateInput>
  }

  /**
   * Columns delete
   */
  export type ColumnsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsInclude<ExtArgs> | null
    /**
     * Filter which Columns to delete.
     */
    where: ColumnsWhereUniqueInput
  }

  /**
   * Columns deleteMany
   */
  export type ColumnsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Columns to delete
     */
    where?: ColumnsWhereInput
    /**
     * Limit how many Columns to delete.
     */
    limit?: number
  }

  /**
   * Columns.cards
   */
  export type Columns$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    where?: CardsWhereInput
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    cursor?: CardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * Columns without action
   */
  export type ColumnsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Columns
     */
    select?: ColumnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Columns
     */
    omit?: ColumnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnsInclude<ExtArgs> | null
  }


  /**
   * Model Cards
   */

  export type AggregateCards = {
    _count: CardsCountAggregateOutputType | null
    _avg: CardsAvgAggregateOutputType | null
    _sum: CardsSumAggregateOutputType | null
    _min: CardsMinAggregateOutputType | null
    _max: CardsMaxAggregateOutputType | null
  }

  export type CardsAvgAggregateOutputType = {
    order: number | null
  }

  export type CardsSumAggregateOutputType = {
    order: number | null
  }

  export type CardsMinAggregateOutputType = {
    id: string | null
    title: string | null
    columnId: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    columnId: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardsCountAggregateOutputType = {
    id: number
    title: number
    columnId: number
    description: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CardsAvgAggregateInputType = {
    order?: true
  }

  export type CardsSumAggregateInputType = {
    order?: true
  }

  export type CardsMinAggregateInputType = {
    id?: true
    title?: true
    columnId?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardsMaxAggregateInputType = {
    id?: true
    title?: true
    columnId?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardsCountAggregateInputType = {
    id?: true
    title?: true
    columnId?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to aggregate.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardsMaxAggregateInputType
  }

  export type GetCardsAggregateType<T extends CardsAggregateArgs> = {
        [P in keyof T & keyof AggregateCards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCards[P]>
      : GetScalarType<T[P], AggregateCards[P]>
  }




  export type CardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardsWhereInput
    orderBy?: CardsOrderByWithAggregationInput | CardsOrderByWithAggregationInput[]
    by: CardsScalarFieldEnum[] | CardsScalarFieldEnum
    having?: CardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardsCountAggregateInputType | true
    _avg?: CardsAvgAggregateInputType
    _sum?: CardsSumAggregateInputType
    _min?: CardsMinAggregateInputType
    _max?: CardsMaxAggregateInputType
  }

  export type CardsGroupByOutputType = {
    id: string
    title: string
    columnId: string
    description: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: CardsCountAggregateOutputType | null
    _avg: CardsAvgAggregateOutputType | null
    _sum: CardsSumAggregateOutputType | null
    _min: CardsMinAggregateOutputType | null
    _max: CardsMaxAggregateOutputType | null
  }

  type GetCardsGroupByPayload<T extends CardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardsGroupByOutputType[P]>
            : GetScalarType<T[P], CardsGroupByOutputType[P]>
        }
      >
    >


  export type CardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    columnId?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    column?: boolean | ColumnsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cards"]>

  export type CardsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    columnId?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    column?: boolean | ColumnsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cards"]>

  export type CardsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    columnId?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    column?: boolean | ColumnsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cards"]>

  export type CardsSelectScalar = {
    id?: boolean
    title?: boolean
    columnId?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CardsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "columnId" | "description" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["cards"]>
  export type CardsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    column?: boolean | ColumnsDefaultArgs<ExtArgs>
  }
  export type CardsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    column?: boolean | ColumnsDefaultArgs<ExtArgs>
  }
  export type CardsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    column?: boolean | ColumnsDefaultArgs<ExtArgs>
  }

  export type $CardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cards"
    objects: {
      column: Prisma.$ColumnsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      columnId: string
      description: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cards"]>
    composites: {}
  }

  type CardsGetPayload<S extends boolean | null | undefined | CardsDefaultArgs> = $Result.GetResult<Prisma.$CardsPayload, S>

  type CardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardsCountAggregateInputType | true
    }

  export interface CardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cards'], meta: { name: 'Cards' } }
    /**
     * Find zero or one Cards that matches the filter.
     * @param {CardsFindUniqueArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardsFindUniqueArgs>(args: SelectSubset<T, CardsFindUniqueArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cards that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardsFindUniqueOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardsFindUniqueOrThrowArgs>(args: SelectSubset<T, CardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindFirstArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardsFindFirstArgs>(args?: SelectSubset<T, CardsFindFirstArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindFirstOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardsFindFirstOrThrowArgs>(args?: SelectSubset<T, CardsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.cards.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.cards.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardsWithIdOnly = await prisma.cards.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardsFindManyArgs>(args?: SelectSubset<T, CardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cards.
     * @param {CardsCreateArgs} args - Arguments to create a Cards.
     * @example
     * // Create one Cards
     * const Cards = await prisma.cards.create({
     *   data: {
     *     // ... data to create a Cards
     *   }
     * })
     * 
     */
    create<T extends CardsCreateArgs>(args: SelectSubset<T, CardsCreateArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardsCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const cards = await prisma.cards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardsCreateManyArgs>(args?: SelectSubset<T, CardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardsCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const cards = await prisma.cards.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardsWithIdOnly = await prisma.cards.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardsCreateManyAndReturnArgs>(args?: SelectSubset<T, CardsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cards.
     * @param {CardsDeleteArgs} args - Arguments to delete one Cards.
     * @example
     * // Delete one Cards
     * const Cards = await prisma.cards.delete({
     *   where: {
     *     // ... filter to delete one Cards
     *   }
     * })
     * 
     */
    delete<T extends CardsDeleteArgs>(args: SelectSubset<T, CardsDeleteArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cards.
     * @param {CardsUpdateArgs} args - Arguments to update one Cards.
     * @example
     * // Update one Cards
     * const cards = await prisma.cards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardsUpdateArgs>(args: SelectSubset<T, CardsUpdateArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardsDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.cards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardsDeleteManyArgs>(args?: SelectSubset<T, CardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const cards = await prisma.cards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardsUpdateManyArgs>(args: SelectSubset<T, CardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardsUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const cards = await prisma.cards.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardsWithIdOnly = await prisma.cards.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardsUpdateManyAndReturnArgs>(args: SelectSubset<T, CardsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cards.
     * @param {CardsUpsertArgs} args - Arguments to update or create a Cards.
     * @example
     * // Update or create a Cards
     * const cards = await prisma.cards.upsert({
     *   create: {
     *     // ... data to create a Cards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cards we want to update
     *   }
     * })
     */
    upsert<T extends CardsUpsertArgs>(args: SelectSubset<T, CardsUpsertArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.cards.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardsCountArgs>(
      args?: Subset<T, CardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardsAggregateArgs>(args: Subset<T, CardsAggregateArgs>): Prisma.PrismaPromise<GetCardsAggregateType<T>>

    /**
     * Group by Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardsGroupByArgs['orderBy'] }
        : { orderBy?: CardsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cards model
   */
  readonly fields: CardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    column<T extends ColumnsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColumnsDefaultArgs<ExtArgs>>): Prisma__ColumnsClient<$Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cards model
   */
  interface CardsFieldRefs {
    readonly id: FieldRef<"Cards", 'String'>
    readonly title: FieldRef<"Cards", 'String'>
    readonly columnId: FieldRef<"Cards", 'String'>
    readonly description: FieldRef<"Cards", 'String'>
    readonly order: FieldRef<"Cards", 'Int'>
    readonly createdAt: FieldRef<"Cards", 'DateTime'>
    readonly updatedAt: FieldRef<"Cards", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cards findUnique
   */
  export type CardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where: CardsWhereUniqueInput
  }

  /**
   * Cards findUniqueOrThrow
   */
  export type CardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where: CardsWhereUniqueInput
  }

  /**
   * Cards findFirst
   */
  export type CardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * Cards findFirstOrThrow
   */
  export type CardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * Cards findMany
   */
  export type CardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * Cards create
   */
  export type CardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * The data needed to create a Cards.
     */
    data: XOR<CardsCreateInput, CardsUncheckedCreateInput>
  }

  /**
   * Cards createMany
   */
  export type CardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardsCreateManyInput | CardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cards createManyAndReturn
   */
  export type CardsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardsCreateManyInput | CardsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cards update
   */
  export type CardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * The data needed to update a Cards.
     */
    data: XOR<CardsUpdateInput, CardsUncheckedUpdateInput>
    /**
     * Choose, which Cards to update.
     */
    where: CardsWhereUniqueInput
  }

  /**
   * Cards updateMany
   */
  export type CardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardsUpdateManyMutationInput, CardsUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardsWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Cards updateManyAndReturn
   */
  export type CardsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardsUpdateManyMutationInput, CardsUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardsWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cards upsert
   */
  export type CardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * The filter to search for the Cards to update in case it exists.
     */
    where: CardsWhereUniqueInput
    /**
     * In case the Cards found by the `where` argument doesn't exist, create a new Cards with this data.
     */
    create: XOR<CardsCreateInput, CardsUncheckedCreateInput>
    /**
     * In case the Cards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardsUpdateInput, CardsUncheckedUpdateInput>
  }

  /**
   * Cards delete
   */
  export type CardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter which Cards to delete.
     */
    where: CardsWhereUniqueInput
  }

  /**
   * Cards deleteMany
   */
  export type CardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardsWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Cards without action
   */
  export type CardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cards
     */
    omit?: CardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BoardsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoardsScalarFieldEnum = (typeof BoardsScalarFieldEnum)[keyof typeof BoardsScalarFieldEnum]


  export const ColumnsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    boardId: 'boardId',
    order: 'order',
    width: 'width',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ColumnsScalarFieldEnum = (typeof ColumnsScalarFieldEnum)[keyof typeof ColumnsScalarFieldEnum]


  export const CardsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    columnId: 'columnId',
    description: 'description',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CardsScalarFieldEnum = (typeof CardsScalarFieldEnum)[keyof typeof CardsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BoardsWhereInput = {
    AND?: BoardsWhereInput | BoardsWhereInput[]
    OR?: BoardsWhereInput[]
    NOT?: BoardsWhereInput | BoardsWhereInput[]
    id?: StringFilter<"Boards"> | string
    title?: StringFilter<"Boards"> | string
    createdAt?: DateTimeFilter<"Boards"> | Date | string
    updatedAt?: DateTimeFilter<"Boards"> | Date | string
    columns?: ColumnsListRelationFilter
  }

  export type BoardsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    columns?: ColumnsOrderByRelationAggregateInput
  }

  export type BoardsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoardsWhereInput | BoardsWhereInput[]
    OR?: BoardsWhereInput[]
    NOT?: BoardsWhereInput | BoardsWhereInput[]
    title?: StringFilter<"Boards"> | string
    createdAt?: DateTimeFilter<"Boards"> | Date | string
    updatedAt?: DateTimeFilter<"Boards"> | Date | string
    columns?: ColumnsListRelationFilter
  }, "id">

  export type BoardsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoardsCountOrderByAggregateInput
    _max?: BoardsMaxOrderByAggregateInput
    _min?: BoardsMinOrderByAggregateInput
  }

  export type BoardsScalarWhereWithAggregatesInput = {
    AND?: BoardsScalarWhereWithAggregatesInput | BoardsScalarWhereWithAggregatesInput[]
    OR?: BoardsScalarWhereWithAggregatesInput[]
    NOT?: BoardsScalarWhereWithAggregatesInput | BoardsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Boards"> | string
    title?: StringWithAggregatesFilter<"Boards"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Boards"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Boards"> | Date | string
  }

  export type ColumnsWhereInput = {
    AND?: ColumnsWhereInput | ColumnsWhereInput[]
    OR?: ColumnsWhereInput[]
    NOT?: ColumnsWhereInput | ColumnsWhereInput[]
    id?: StringFilter<"Columns"> | string
    title?: StringFilter<"Columns"> | string
    boardId?: StringFilter<"Columns"> | string
    order?: IntFilter<"Columns"> | number
    width?: IntFilter<"Columns"> | number
    createdAt?: DateTimeFilter<"Columns"> | Date | string
    updatedAt?: DateTimeFilter<"Columns"> | Date | string
    board?: XOR<BoardsScalarRelationFilter, BoardsWhereInput>
    cards?: CardsListRelationFilter
  }

  export type ColumnsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
    width?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    board?: BoardsOrderByWithRelationInput
    cards?: CardsOrderByRelationAggregateInput
  }

  export type ColumnsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ColumnsWhereInput | ColumnsWhereInput[]
    OR?: ColumnsWhereInput[]
    NOT?: ColumnsWhereInput | ColumnsWhereInput[]
    title?: StringFilter<"Columns"> | string
    boardId?: StringFilter<"Columns"> | string
    order?: IntFilter<"Columns"> | number
    width?: IntFilter<"Columns"> | number
    createdAt?: DateTimeFilter<"Columns"> | Date | string
    updatedAt?: DateTimeFilter<"Columns"> | Date | string
    board?: XOR<BoardsScalarRelationFilter, BoardsWhereInput>
    cards?: CardsListRelationFilter
  }, "id">

  export type ColumnsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
    width?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ColumnsCountOrderByAggregateInput
    _avg?: ColumnsAvgOrderByAggregateInput
    _max?: ColumnsMaxOrderByAggregateInput
    _min?: ColumnsMinOrderByAggregateInput
    _sum?: ColumnsSumOrderByAggregateInput
  }

  export type ColumnsScalarWhereWithAggregatesInput = {
    AND?: ColumnsScalarWhereWithAggregatesInput | ColumnsScalarWhereWithAggregatesInput[]
    OR?: ColumnsScalarWhereWithAggregatesInput[]
    NOT?: ColumnsScalarWhereWithAggregatesInput | ColumnsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Columns"> | string
    title?: StringWithAggregatesFilter<"Columns"> | string
    boardId?: StringWithAggregatesFilter<"Columns"> | string
    order?: IntWithAggregatesFilter<"Columns"> | number
    width?: IntWithAggregatesFilter<"Columns"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Columns"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Columns"> | Date | string
  }

  export type CardsWhereInput = {
    AND?: CardsWhereInput | CardsWhereInput[]
    OR?: CardsWhereInput[]
    NOT?: CardsWhereInput | CardsWhereInput[]
    id?: StringFilter<"Cards"> | string
    title?: StringFilter<"Cards"> | string
    columnId?: StringFilter<"Cards"> | string
    description?: StringNullableFilter<"Cards"> | string | null
    order?: IntFilter<"Cards"> | number
    createdAt?: DateTimeFilter<"Cards"> | Date | string
    updatedAt?: DateTimeFilter<"Cards"> | Date | string
    column?: XOR<ColumnsScalarRelationFilter, ColumnsWhereInput>
  }

  export type CardsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    columnId?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    column?: ColumnsOrderByWithRelationInput
  }

  export type CardsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardsWhereInput | CardsWhereInput[]
    OR?: CardsWhereInput[]
    NOT?: CardsWhereInput | CardsWhereInput[]
    title?: StringFilter<"Cards"> | string
    columnId?: StringFilter<"Cards"> | string
    description?: StringNullableFilter<"Cards"> | string | null
    order?: IntFilter<"Cards"> | number
    createdAt?: DateTimeFilter<"Cards"> | Date | string
    updatedAt?: DateTimeFilter<"Cards"> | Date | string
    column?: XOR<ColumnsScalarRelationFilter, ColumnsWhereInput>
  }, "id">

  export type CardsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    columnId?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CardsCountOrderByAggregateInput
    _avg?: CardsAvgOrderByAggregateInput
    _max?: CardsMaxOrderByAggregateInput
    _min?: CardsMinOrderByAggregateInput
    _sum?: CardsSumOrderByAggregateInput
  }

  export type CardsScalarWhereWithAggregatesInput = {
    AND?: CardsScalarWhereWithAggregatesInput | CardsScalarWhereWithAggregatesInput[]
    OR?: CardsScalarWhereWithAggregatesInput[]
    NOT?: CardsScalarWhereWithAggregatesInput | CardsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cards"> | string
    title?: StringWithAggregatesFilter<"Cards"> | string
    columnId?: StringWithAggregatesFilter<"Cards"> | string
    description?: StringNullableWithAggregatesFilter<"Cards"> | string | null
    order?: IntWithAggregatesFilter<"Cards"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cards"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cards"> | Date | string
  }

  export type BoardsCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: ColumnsCreateNestedManyWithoutBoardInput
  }

  export type BoardsUncheckedCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: ColumnsUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnsUpdateManyWithoutBoardNestedInput
  }

  export type BoardsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnsUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardsCreateManyInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnsCreateInput = {
    id?: string
    title: string
    order: number
    width: number
    createdAt?: Date | string
    updatedAt?: Date | string
    board: BoardsCreateNestedOneWithoutColumnsInput
    cards?: CardsCreateNestedManyWithoutColumnInput
  }

  export type ColumnsUncheckedCreateInput = {
    id?: string
    title: string
    boardId: string
    order: number
    width: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: CardsUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardsUpdateOneRequiredWithoutColumnsNestedInput
    cards?: CardsUpdateManyWithoutColumnNestedInput
  }

  export type ColumnsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardsUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnsCreateManyInput = {
    id?: string
    title: string
    boardId: string
    order: number
    width: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColumnsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsCreateInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    column: ColumnsCreateNestedOneWithoutCardsInput
  }

  export type CardsUncheckedCreateInput = {
    id?: string
    title: string
    columnId: string
    description?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    column?: ColumnsUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsCreateManyInput = {
    id?: string
    title: string
    columnId: string
    description?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ColumnsListRelationFilter = {
    every?: ColumnsWhereInput
    some?: ColumnsWhereInput
    none?: ColumnsWhereInput
  }

  export type ColumnsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoardsScalarRelationFilter = {
    is?: BoardsWhereInput
    isNot?: BoardsWhereInput
  }

  export type CardsListRelationFilter = {
    every?: CardsWhereInput
    some?: CardsWhereInput
    none?: CardsWhereInput
  }

  export type CardsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColumnsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
    width?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColumnsAvgOrderByAggregateInput = {
    order?: SortOrder
    width?: SortOrder
  }

  export type ColumnsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
    width?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColumnsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
    width?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColumnsSumOrderByAggregateInput = {
    order?: SortOrder
    width?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ColumnsScalarRelationFilter = {
    is?: ColumnsWhereInput
    isNot?: ColumnsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CardsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    columnId?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardsAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CardsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    columnId?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    columnId?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardsSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ColumnsCreateNestedManyWithoutBoardInput = {
    create?: XOR<ColumnsCreateWithoutBoardInput, ColumnsUncheckedCreateWithoutBoardInput> | ColumnsCreateWithoutBoardInput[] | ColumnsUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ColumnsCreateOrConnectWithoutBoardInput | ColumnsCreateOrConnectWithoutBoardInput[]
    createMany?: ColumnsCreateManyBoardInputEnvelope
    connect?: ColumnsWhereUniqueInput | ColumnsWhereUniqueInput[]
  }

  export type ColumnsUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<ColumnsCreateWithoutBoardInput, ColumnsUncheckedCreateWithoutBoardInput> | ColumnsCreateWithoutBoardInput[] | ColumnsUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ColumnsCreateOrConnectWithoutBoardInput | ColumnsCreateOrConnectWithoutBoardInput[]
    createMany?: ColumnsCreateManyBoardInputEnvelope
    connect?: ColumnsWhereUniqueInput | ColumnsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ColumnsUpdateManyWithoutBoardNestedInput = {
    create?: XOR<ColumnsCreateWithoutBoardInput, ColumnsUncheckedCreateWithoutBoardInput> | ColumnsCreateWithoutBoardInput[] | ColumnsUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ColumnsCreateOrConnectWithoutBoardInput | ColumnsCreateOrConnectWithoutBoardInput[]
    upsert?: ColumnsUpsertWithWhereUniqueWithoutBoardInput | ColumnsUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: ColumnsCreateManyBoardInputEnvelope
    set?: ColumnsWhereUniqueInput | ColumnsWhereUniqueInput[]
    disconnect?: ColumnsWhereUniqueInput | ColumnsWhereUniqueInput[]
    delete?: ColumnsWhereUniqueInput | ColumnsWhereUniqueInput[]
    connect?: ColumnsWhereUniqueInput | ColumnsWhereUniqueInput[]
    update?: ColumnsUpdateWithWhereUniqueWithoutBoardInput | ColumnsUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: ColumnsUpdateManyWithWhereWithoutBoardInput | ColumnsUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: ColumnsScalarWhereInput | ColumnsScalarWhereInput[]
  }

  export type ColumnsUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<ColumnsCreateWithoutBoardInput, ColumnsUncheckedCreateWithoutBoardInput> | ColumnsCreateWithoutBoardInput[] | ColumnsUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ColumnsCreateOrConnectWithoutBoardInput | ColumnsCreateOrConnectWithoutBoardInput[]
    upsert?: ColumnsUpsertWithWhereUniqueWithoutBoardInput | ColumnsUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: ColumnsCreateManyBoardInputEnvelope
    set?: ColumnsWhereUniqueInput | ColumnsWhereUniqueInput[]
    disconnect?: ColumnsWhereUniqueInput | ColumnsWhereUniqueInput[]
    delete?: ColumnsWhereUniqueInput | ColumnsWhereUniqueInput[]
    connect?: ColumnsWhereUniqueInput | ColumnsWhereUniqueInput[]
    update?: ColumnsUpdateWithWhereUniqueWithoutBoardInput | ColumnsUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: ColumnsUpdateManyWithWhereWithoutBoardInput | ColumnsUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: ColumnsScalarWhereInput | ColumnsScalarWhereInput[]
  }

  export type BoardsCreateNestedOneWithoutColumnsInput = {
    create?: XOR<BoardsCreateWithoutColumnsInput, BoardsUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: BoardsCreateOrConnectWithoutColumnsInput
    connect?: BoardsWhereUniqueInput
  }

  export type CardsCreateNestedManyWithoutColumnInput = {
    create?: XOR<CardsCreateWithoutColumnInput, CardsUncheckedCreateWithoutColumnInput> | CardsCreateWithoutColumnInput[] | CardsUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutColumnInput | CardsCreateOrConnectWithoutColumnInput[]
    createMany?: CardsCreateManyColumnInputEnvelope
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
  }

  export type CardsUncheckedCreateNestedManyWithoutColumnInput = {
    create?: XOR<CardsCreateWithoutColumnInput, CardsUncheckedCreateWithoutColumnInput> | CardsCreateWithoutColumnInput[] | CardsUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutColumnInput | CardsCreateOrConnectWithoutColumnInput[]
    createMany?: CardsCreateManyColumnInputEnvelope
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoardsUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: XOR<BoardsCreateWithoutColumnsInput, BoardsUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: BoardsCreateOrConnectWithoutColumnsInput
    upsert?: BoardsUpsertWithoutColumnsInput
    connect?: BoardsWhereUniqueInput
    update?: XOR<XOR<BoardsUpdateToOneWithWhereWithoutColumnsInput, BoardsUpdateWithoutColumnsInput>, BoardsUncheckedUpdateWithoutColumnsInput>
  }

  export type CardsUpdateManyWithoutColumnNestedInput = {
    create?: XOR<CardsCreateWithoutColumnInput, CardsUncheckedCreateWithoutColumnInput> | CardsCreateWithoutColumnInput[] | CardsUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutColumnInput | CardsCreateOrConnectWithoutColumnInput[]
    upsert?: CardsUpsertWithWhereUniqueWithoutColumnInput | CardsUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: CardsCreateManyColumnInputEnvelope
    set?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    disconnect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    delete?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    update?: CardsUpdateWithWhereUniqueWithoutColumnInput | CardsUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: CardsUpdateManyWithWhereWithoutColumnInput | CardsUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: CardsScalarWhereInput | CardsScalarWhereInput[]
  }

  export type CardsUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: XOR<CardsCreateWithoutColumnInput, CardsUncheckedCreateWithoutColumnInput> | CardsCreateWithoutColumnInput[] | CardsUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutColumnInput | CardsCreateOrConnectWithoutColumnInput[]
    upsert?: CardsUpsertWithWhereUniqueWithoutColumnInput | CardsUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: CardsCreateManyColumnInputEnvelope
    set?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    disconnect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    delete?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    update?: CardsUpdateWithWhereUniqueWithoutColumnInput | CardsUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: CardsUpdateManyWithWhereWithoutColumnInput | CardsUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: CardsScalarWhereInput | CardsScalarWhereInput[]
  }

  export type ColumnsCreateNestedOneWithoutCardsInput = {
    create?: XOR<ColumnsCreateWithoutCardsInput, ColumnsUncheckedCreateWithoutCardsInput>
    connectOrCreate?: ColumnsCreateOrConnectWithoutCardsInput
    connect?: ColumnsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ColumnsUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<ColumnsCreateWithoutCardsInput, ColumnsUncheckedCreateWithoutCardsInput>
    connectOrCreate?: ColumnsCreateOrConnectWithoutCardsInput
    upsert?: ColumnsUpsertWithoutCardsInput
    connect?: ColumnsWhereUniqueInput
    update?: XOR<XOR<ColumnsUpdateToOneWithWhereWithoutCardsInput, ColumnsUpdateWithoutCardsInput>, ColumnsUncheckedUpdateWithoutCardsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ColumnsCreateWithoutBoardInput = {
    id?: string
    title: string
    order: number
    width: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: CardsCreateNestedManyWithoutColumnInput
  }

  export type ColumnsUncheckedCreateWithoutBoardInput = {
    id?: string
    title: string
    order: number
    width: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: CardsUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnsCreateOrConnectWithoutBoardInput = {
    where: ColumnsWhereUniqueInput
    create: XOR<ColumnsCreateWithoutBoardInput, ColumnsUncheckedCreateWithoutBoardInput>
  }

  export type ColumnsCreateManyBoardInputEnvelope = {
    data: ColumnsCreateManyBoardInput | ColumnsCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type ColumnsUpsertWithWhereUniqueWithoutBoardInput = {
    where: ColumnsWhereUniqueInput
    update: XOR<ColumnsUpdateWithoutBoardInput, ColumnsUncheckedUpdateWithoutBoardInput>
    create: XOR<ColumnsCreateWithoutBoardInput, ColumnsUncheckedCreateWithoutBoardInput>
  }

  export type ColumnsUpdateWithWhereUniqueWithoutBoardInput = {
    where: ColumnsWhereUniqueInput
    data: XOR<ColumnsUpdateWithoutBoardInput, ColumnsUncheckedUpdateWithoutBoardInput>
  }

  export type ColumnsUpdateManyWithWhereWithoutBoardInput = {
    where: ColumnsScalarWhereInput
    data: XOR<ColumnsUpdateManyMutationInput, ColumnsUncheckedUpdateManyWithoutBoardInput>
  }

  export type ColumnsScalarWhereInput = {
    AND?: ColumnsScalarWhereInput | ColumnsScalarWhereInput[]
    OR?: ColumnsScalarWhereInput[]
    NOT?: ColumnsScalarWhereInput | ColumnsScalarWhereInput[]
    id?: StringFilter<"Columns"> | string
    title?: StringFilter<"Columns"> | string
    boardId?: StringFilter<"Columns"> | string
    order?: IntFilter<"Columns"> | number
    width?: IntFilter<"Columns"> | number
    createdAt?: DateTimeFilter<"Columns"> | Date | string
    updatedAt?: DateTimeFilter<"Columns"> | Date | string
  }

  export type BoardsCreateWithoutColumnsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardsUncheckedCreateWithoutColumnsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardsCreateOrConnectWithoutColumnsInput = {
    where: BoardsWhereUniqueInput
    create: XOR<BoardsCreateWithoutColumnsInput, BoardsUncheckedCreateWithoutColumnsInput>
  }

  export type CardsCreateWithoutColumnInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardsUncheckedCreateWithoutColumnInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardsCreateOrConnectWithoutColumnInput = {
    where: CardsWhereUniqueInput
    create: XOR<CardsCreateWithoutColumnInput, CardsUncheckedCreateWithoutColumnInput>
  }

  export type CardsCreateManyColumnInputEnvelope = {
    data: CardsCreateManyColumnInput | CardsCreateManyColumnInput[]
    skipDuplicates?: boolean
  }

  export type BoardsUpsertWithoutColumnsInput = {
    update: XOR<BoardsUpdateWithoutColumnsInput, BoardsUncheckedUpdateWithoutColumnsInput>
    create: XOR<BoardsCreateWithoutColumnsInput, BoardsUncheckedCreateWithoutColumnsInput>
    where?: BoardsWhereInput
  }

  export type BoardsUpdateToOneWithWhereWithoutColumnsInput = {
    where?: BoardsWhereInput
    data: XOR<BoardsUpdateWithoutColumnsInput, BoardsUncheckedUpdateWithoutColumnsInput>
  }

  export type BoardsUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardsUncheckedUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsUpsertWithWhereUniqueWithoutColumnInput = {
    where: CardsWhereUniqueInput
    update: XOR<CardsUpdateWithoutColumnInput, CardsUncheckedUpdateWithoutColumnInput>
    create: XOR<CardsCreateWithoutColumnInput, CardsUncheckedCreateWithoutColumnInput>
  }

  export type CardsUpdateWithWhereUniqueWithoutColumnInput = {
    where: CardsWhereUniqueInput
    data: XOR<CardsUpdateWithoutColumnInput, CardsUncheckedUpdateWithoutColumnInput>
  }

  export type CardsUpdateManyWithWhereWithoutColumnInput = {
    where: CardsScalarWhereInput
    data: XOR<CardsUpdateManyMutationInput, CardsUncheckedUpdateManyWithoutColumnInput>
  }

  export type CardsScalarWhereInput = {
    AND?: CardsScalarWhereInput | CardsScalarWhereInput[]
    OR?: CardsScalarWhereInput[]
    NOT?: CardsScalarWhereInput | CardsScalarWhereInput[]
    id?: StringFilter<"Cards"> | string
    title?: StringFilter<"Cards"> | string
    columnId?: StringFilter<"Cards"> | string
    description?: StringNullableFilter<"Cards"> | string | null
    order?: IntFilter<"Cards"> | number
    createdAt?: DateTimeFilter<"Cards"> | Date | string
    updatedAt?: DateTimeFilter<"Cards"> | Date | string
  }

  export type ColumnsCreateWithoutCardsInput = {
    id?: string
    title: string
    order: number
    width: number
    createdAt?: Date | string
    updatedAt?: Date | string
    board: BoardsCreateNestedOneWithoutColumnsInput
  }

  export type ColumnsUncheckedCreateWithoutCardsInput = {
    id?: string
    title: string
    boardId: string
    order: number
    width: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColumnsCreateOrConnectWithoutCardsInput = {
    where: ColumnsWhereUniqueInput
    create: XOR<ColumnsCreateWithoutCardsInput, ColumnsUncheckedCreateWithoutCardsInput>
  }

  export type ColumnsUpsertWithoutCardsInput = {
    update: XOR<ColumnsUpdateWithoutCardsInput, ColumnsUncheckedUpdateWithoutCardsInput>
    create: XOR<ColumnsCreateWithoutCardsInput, ColumnsUncheckedCreateWithoutCardsInput>
    where?: ColumnsWhereInput
  }

  export type ColumnsUpdateToOneWithWhereWithoutCardsInput = {
    where?: ColumnsWhereInput
    data: XOR<ColumnsUpdateWithoutCardsInput, ColumnsUncheckedUpdateWithoutCardsInput>
  }

  export type ColumnsUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardsUpdateOneRequiredWithoutColumnsNestedInput
  }

  export type ColumnsUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnsCreateManyBoardInput = {
    id?: string
    title: string
    order: number
    width: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColumnsUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardsUpdateManyWithoutColumnNestedInput
  }

  export type ColumnsUncheckedUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardsUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnsUncheckedUpdateManyWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsCreateManyColumnInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardsUpdateWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsUncheckedUpdateWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsUncheckedUpdateManyWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}