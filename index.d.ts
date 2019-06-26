/// <reference lib="esnext" />

/**
 * 各種 CoxObject の種別を識別するために必要なシンボル
 */
export const coxSymbols: {
  cox: Symbol,
  call: Symbol,
  new: Symbol,
  chain: Symbol,
  raw: Symbol,
};

/**
 * 各種cox関連メソッドで得られるプロキシされたオブジェクトのtypeを識別するSymbolの型定義
 */
export declare type CoxSymbol = keyof typeof coxSymbols;

/**
 * 各種cox関連メソッドで得られるプロキシされたオブジェクトの型定義
 */
export declare type CoxObject<T extends CoxSymbol, U extends Function, V extends any[], W, X extends boolean, Y extends boolean> = {
  type: T,
  callback: U,
  args: V,
  thisArg: T extends "call" | "chain" | "raw" ? W : undefined,
  isAsync: X,
  isError: Y,
};

/**
 * メソッドcoxの戻り値となるCoxObjectです
 */
type CoxCoxObject<T extends Function, U extends any[], X extends boolean, Y extends boolean> = CoxObject<"cox", T, U, never, X, Y>

/**
 * メソッドcallの戻り値となるCoxObjectです
 */
type CallCoxObject<T extends Function, U extends any[], V extends any, X extends boolean, Y extends boolean> = CoxObject<"call", T, U, V, X, Y>

/**
 * メソッドnewの戻り値となるCoxObjectです
 */
type NewCoxObject<T extends Function, U extends any[], X extends boolean, Y extends boolean> = CoxObject<"new", T, U, never, X, Y>

/**
 * メソッドchainの戻り値となるCoxObjectです
 */
type ChainCoxObject<T extends Function, U extends any[], V extends any, X extends boolean, Y extends boolean> = CoxObject<"chain", T, U, V, X, Y>

/**
 * メソッドrawの戻り値となるCoxObjectです
 */
type RawCoxObject<T extends any, X extends boolean, Y extends boolean> = CoxObject<"raw", undefined, [], T, X, Y>

/**
 * this無指定のシンプルな関数をプロキシします
 * @param callback プロキシ対象となる関数
 * @param ...args 関数を実行する際に渡す引数
 * @return CoxObject
 */
declare function $cox<T>(callback: (...cbArgs: typeof args) => T, ...args: []): CoxCoxObject<typeof callback, typeof args, false, false>;
declare function $cox<T, P1>(callback: (...cbArgs: typeof args) => T, ...args: [P1]): CoxCoxObject<typeof callback, typeof args, false, false>;
declare function $cox<T, P1, P2>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2]): CoxCoxObject<typeof callback, typeof args, false, false>;
declare function $cox<T, P1, P2, P3>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3]): CoxCoxObject<typeof callback, typeof args, false, false>;
declare function $cox<T, P1, P2, P3, P4>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4]): CoxCoxObject<typeof callback, typeof args, false, false>;
declare function $cox<T, P1, P2, P3, P4, P5>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5]): CoxCoxObject<typeof callback, typeof args, false, false>;
declare function $cox<T, P1, P2, P3, P4, P5, P6>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6]): CoxCoxObject<typeof callback, typeof args, false, false>;
declare function $cox<T, P1, P2, P3, P4, P5, P6, P7>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7]): CoxCoxObject<typeof callback, typeof args, false, false>;
declare function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): CoxCoxObject<typeof callback, typeof args, false, false>;
declare function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): CoxCoxObject<typeof callback, typeof args, false, false>;
declare function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): CoxCoxObject<typeof callback, typeof args, false, false>;

declare namespace $cox {
  /**
   * 関数の引数の型定義を配列として取り出します
   */
  type AllArgs<T> = T extends () => any ? []
    : T extends (p1: infer P1) => any ? [P1]
    : T extends (p1: infer P1, p2: infer P2) => any ? [P1, P2]
    : T extends (p1: infer P1, p2: infer P2, p3: infer P3) => any ? [P1, P2, P3]
    : T extends (p1: infer P1, p2: infer P2, p3: infer P3, p4: infer P4) => any ? [P1, P2, P3, P4]
    : T extends (p1: infer P1, p2: infer P2, p3: infer P3, p4: infer P4, p5: infer P5) => any ? [P1, P2, P3, P4, P5]
    : T extends (p1: infer P1, p2: infer P2, p3: infer P3, p4: infer P4, p5: infer P5, p6: infer P6) => any ? [P1, P2, P3, P4, P5, P6]
    : T extends (p1: infer P1, p2: infer P2, p3: infer P3, p4: infer P4, p5: infer P5, p6: infer P6, p7: infer P7) => any ? [P1, P2, P3, P4, P5, P6, P7]
    : T extends (p1: infer P1, p2: infer P2, p3: infer P3, p4: infer P4, p5: infer P5, p6: infer P6, p7: infer P7, p8: infer P8) => any ? [P1, P2, P3, P4, P5, P6, P7, P8]
    : T extends (p1: infer P1, p2: infer P2, p3: infer P3, p4: infer P4, p5: infer P5, p6: infer P6, p7: infer P7, p8: infer P8, p9: infer P9) => any ? [P1, P2, P3, P4, P5, P6, P7, P8, P9]
    : T extends (p1: infer P1, p2: infer P2, p3: infer P3, p4: infer P4, p5: infer P5, p6: infer P6, p7: infer P7, p8: infer P8, p9: infer P9, p10: infer P10) => any ? [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]
    : any[];

  /**
   * coxを返すGeneratorを通常の関数に変換するラッパー
   * @param callback coxを返すGeneratorもしくはAsyncGenerator
   * @return Generatorの最後の評価値
   */
  function wrap<T>(callback: (...cbArgs: []) => IterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T, P1>(callback: (...cbArgs: [P1]) => IterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T, P1, P2>(callback: (...cbArgs: [P1, P2]) => IterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T, P1, P2, P3>(callback: (...cbArgs: [P1, P2, P3]) => IterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T, P1, P2, P3, P4>(callback: (...cbArgs: [P1, P2, P3, P4]) => IterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T, P1, P2, P3, P4, P5>(callback: (...cbArgs: [P1, P2, P3, P4, P5]) => IterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T, P1, P2, P3, P4, P5, P6>(callback: (...cbArgs: [P1, P2, P3, P4, P5, P6]) => IterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T, P1, P2, P3, P4, P5, P6, P7>(callback: (...cbArgs: [P1, P2, P3, P4, P5, P6, P7]) => IterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T, P1, P2, P3, P4, P5, P6, P7, P8>(callback: (...cbArgs: [P1, P2, P3, P4, P5, P6, P7, P8]) => IterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: (...cbArgs: [P1, P2, P3, P4, P5, P6, P7, P8, P9]) => IterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: (...cbArgs: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]) => IterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T>(callback: (...cbArgs: []) => AsyncIterableIterator<T>): (...args: AllArgs<typeof callback>) => Promise<T>;
  function wrap<T, P1>(callback: (...cbArgs: [P1]) => AsyncIterableIterator<T>): (...args: AllArgs<typeof callback>) => Promise<T>;
  function wrap<T, P1, P2>(callback: (...cbArgs: [P1, P2]) => AsyncIterableIterator<T>): (...args: AllArgs<typeof callback>) => Promise<T>;
  function wrap<T, P1, P2, P3>(callback: (...cbArgs: [P1, P2, P3]) => AsyncIterableIterator<T>): (...args: AllArgs<typeof callback>) => Promise<T>;
  function wrap<T, P1, P2, P3, P4>(callback: (...cbArgs: [P1, P2, P3, P4]) => AsyncIterableIterator<T>): (...args: AllArgs<typeof callback>) => Promise<T>;
  function wrap<T, P1, P2, P3, P4, P5>(callback: (...cbArgs: [P1, P2, P3, P4, P5]) => AsyncIterableIterator<T>): (...args: AllArgs<typeof callback>) => T;
  function wrap<T, P1, P2, P3, P4, P5, P6>(callback: (...cbArgs: [P1, P2, P3, P4, P5, P6]) => AsyncIterableIterator<T>): (...args: AllArgs<typeof callback>) => Promise<T>;
  function wrap<T, P1, P2, P3, P4, P5, P6, P7>(callback: (...cbArgs: [P1, P2, P3, P4, P5, P6, P7]) => AsyncIterableIterator<T>): (...args: AllArgs<typeof callback>) => Promise<T>;
  function wrap<T, P1, P2, P3, P4, P5, P6, P7, P8>(callback: (...cbArgs: [P1, P2, P3, P4, P5, P6, P7, P8]) => AsyncIterableIterator<T>): (...args: AllArgs<typeof callback>) => Promise<T>;
  function wrap<T, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: (...cbArgs: [P1, P2, P3, P4, P5, P6, P7, P8, P9]) => AsyncIterableIterator<T>): (...args: AllArgs<typeof callback>) => Promise<T>;
  function wrap<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: (...cbArgs: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]) => AsyncIterableIterator<T>): (...args: AllArgs<typeof callback>) => Promise<T>;

  /**
   * 非asyncなCoxObjectを評価して次の評価値を得ます
   * @param coxObject 任意のcoxObject
   * @return coxObjectの評価値
   */
  function step<T extends CoxSymbol, U1 extends new (...args: any[]) => any, U2 extends (...args: any[]) => any, W, X extends boolean, Y extends boolean>(coxObject: CoxObject<T, T extends "new" ? U1 : U2, T extends "new" ? AllArgs<U1>: AllArgs<U2>, W, X, Y>): T extends "raw" ? W : T extends "new" ? InstanceType<U1> : ReturnType<U2>;
  
   /**
    * asyncなCoxObjectを評価して次の評価値を得ます
    * @param coxObject 任意のcoxObject
    * @return coxObjectの評価値
    */
   function stepAsync<T extends CoxSymbol, U1 extends new (...args: any[]) => Promise<any>, U2 extends (...args: any[]) => Promise<any>, W, X extends boolean, Y extends boolean>(coxObject: CoxObject<T, T extends "new" ? U1 : U2, T extends "new" ? AllArgs<U1>: AllArgs<U2>, W, X, Y>): T extends "raw" ? W : T extends "new" ? InstanceType<U1> : ReturnType<U2>;
   
  /**
   * this指定のシンプルな関数をプロキシします
   * @param callback プロキシ対象となる関数
   * @param thisArg 関数を実行する際のthisの値
   * @param ...args 関数を実行する際に渡す引数
   * @return CoxObject
   */
  function $call<T, U>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: []): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, false>;
  function $call<T, U, P1>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, false>;
  function $call<T, U, P1, P2>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, false>;
  function $call<T, U, P1, P2, P3>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, false>;
  function $call<T, U, P1, P2, P3, P4>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, false>;
  function $call<T, U, P1, P2, P3, P4, P5>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, false>;
  function $call<T, U, P1, P2, P3, P4, P5, P6>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, false>;
  function $call<T, U, P1, P2, P3, P4, P5, P6, P7>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, false>;
  function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, false>;
  function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, false>;
  function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, false>;

  /**
   * クラス関数に対してインスタンスをnewしつつプロキシします
   * @param callback プロキシ対象となるクラス関数
   * @param ...args クラス関数を実行する際に渡すコンストラクタ引数
   * @return CoxObject
   */
  function $new<T>(callback: new (...cbArgs: typeof args) => T, ...args: []): NewCoxObject<typeof callback, typeof args, false, false>;
  function $new<T, P1>(callback: new (...cbArgs: typeof args) => T, ...args: [P1]): NewCoxObject<typeof callback, typeof args, false, false>;
  function $new<T, P1, P2>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2]): NewCoxObject<typeof callback, typeof args, false, false>;
  function $new<T, P1, P2, P3>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3]): NewCoxObject<typeof callback, typeof args, false, false>;
  function $new<T, P1, P2, P3, P4>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4]): NewCoxObject<typeof callback, typeof args, false, false>;
  function $new<T, P1, P2, P3, P4, P5>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5]): NewCoxObject<typeof callback, typeof args, false, false>;
  function $new<T, P1, P2, P3, P4, P5, P6>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6]): NewCoxObject<typeof callback, typeof args, false, false>;
  function $new<T, P1, P2, P3, P4, P5, P6, P7>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7]): NewCoxObject<typeof callback, typeof args, false, false>;
  function $new<T, P1, P2, P3, P4, P5, P6, P7, P8>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): NewCoxObject<typeof callback, typeof args, false, false>;
  function $new<T, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): NewCoxObject<typeof callback, typeof args, false, false>;
  function $new<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): NewCoxObject<typeof callback, typeof args, false, false>;

  /**
   * メソッドチェーンに対して、各メソッドに対してプロキシするCoxGeneratorを新たに生成します
   * @param initializer 開始点となる対象のthisを返す関数
   * @param ...args チェーンするメソッド群とその引数
   * @param finalizer? thisに対して最終加工をすることが出来ます
   * @return CoxObject
   */
  function $chain<T, P1, R1>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, R1, R2>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, R1, R2, R3>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, R1, R2, R3, R4>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, R1, R2, R3, R4, R5>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, R1, R2, R3, R4, R5, R6>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, R1, R2, R3, R4, R5, R6, R7>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, R1, R2, R3, R4, R5, R6, R7, R8>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
    args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
    args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
    args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
    args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
    args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
    args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
    args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
    args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
    args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
    args15: [(thisArg: R14) => (...args: P15[]) => R15, ...P15[]],
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, R1, R2>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    finalizer: (thisArg: R1) => R2,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, R1, R2, R3>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    finalizer: (thisArg: R2) => R3,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, R1, R2, R3, R4>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    finalizer: (thisArg: R3) => R4,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, R1, R2, R3, R4, R5>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    finalizer: (thisArg: R4) => R5,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, R1, R2, R3, R4, R5, R6>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    finalizer: (thisArg: R5) => R6,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, R1, R2, R3, R4, R5, R6, R7>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    finalizer: (thisArg: R6) => R7,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, R1, R2, R3, R4, R5, R6, R7, R8>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    finalizer: (thisArg: R7) => R8,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    finalizer: (thisArg: R8) => R9,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    finalizer: (thisArg: R9) => R10,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    finalizer: (thisArg: R10) => R11,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
    finalizer: (thisArg: R11) => R12,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
    args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
    finalizer: (thisArg: R12) => R13,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
    args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
    args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
    finalizer: (thisArg: R13) => R14,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
    args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
    args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
    args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
    finalizer: (thisArg: R14) => R15,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
    args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
    args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
    args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
    args15: [(thisArg: R14) => (...args: P15[]) => R15, ...P15[]],
    finalizer: (thisArg: R15) => R16,
  ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15 | R16>, AllArgs<ReturnType<typeof args1[0]>>, T, false, false>;
  
  /**
   * 任意の値をtapする操作に対してプロキシします
   * @param arg 任意の値
   * @return CoxObject
   */
  function $raw<T>(arg: T): RawCoxObject<typeof arg, false, false>;

  /**
   * 任意のPromiseをawaitする操作に対してプロキシします
   * @param arg 任意のPromiseオブジェクト
   * @return CoxObject
   */
  function $await<T>(arg: Promise<T>): RawCoxObject<typeof arg, true, false>;

  namespace $await {
    /**
     * this無指定のシンプルな関数をプロキシします
     * @param callback プロキシ対象となる関数
     * @param ...args 関数を実行する際に渡す引数
     * @return CoxObject
     */
    function $cox<T>(callback: (...cbArgs: typeof args) => T, ...args: []): CoxCoxObject<typeof callback, typeof args, true, false>;
    function $cox<T, P1>(callback: (...cbArgs: typeof args) => T, ...args: [P1]): CoxCoxObject<typeof callback, typeof args, true, false>;
    function $cox<T, P1, P2>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2]): CoxCoxObject<typeof callback, typeof args, true, false>;
    function $cox<T, P1, P2, P3>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3]): CoxCoxObject<typeof callback, typeof args, true, false>;
    function $cox<T, P1, P2, P3, P4>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4]): CoxCoxObject<typeof callback, typeof args, true, false>;
    function $cox<T, P1, P2, P3, P4, P5>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5]): CoxCoxObject<typeof callback, typeof args, true, false>;
    function $cox<T, P1, P2, P3, P4, P5, P6>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6]): CoxCoxObject<typeof callback, typeof args, true, false>;
    function $cox<T, P1, P2, P3, P4, P5, P6, P7>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7]): CoxCoxObject<typeof callback, typeof args, true, false>;
    function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): CoxCoxObject<typeof callback, typeof args, true, false>;
    function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): CoxCoxObject<typeof callback, typeof args, true, false>;
    function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): CoxCoxObject<typeof callback, typeof args, true, false>;
    
    /**
     * this指定のシンプルな関数をプロキシします
     * @param callback プロキシ対象となる関数
     * @param thisArg 関数を実行する際のthisの値
     * @param ...args 関数を実行する際に渡す引数
     * @return CoxObject
     */
      function $call<T, U>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: []): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, false>;
      function $call<T, U, P1>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, false>;
      function $call<T, U, P1, P2>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, false>;
      function $call<T, U, P1, P2, P3>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, false>;
      function $call<T, U, P1, P2, P3, P4>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, false>;
      function $call<T, U, P1, P2, P3, P4, P5>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, false>;
      function $call<T, U, P1, P2, P3, P4, P5, P6>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, false>;
      function $call<T, U, P1, P2, P3, P4, P5, P6, P7>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, false>;
      function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, false>;
      function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, false>;
      function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, false>;

      /**
       * クラス関数に対してインスタンスをnewしつつプロキシします
       * @param callback プロキシ対象となるクラス関数
       * @param ...args クラス関数を実行する際に渡すコンストラクタ引数
       * @return CoxObject
       */
      function $new<T>(callback: new (...cbArgs: typeof args) => T, ...args: []): NewCoxObject<typeof callback, typeof args, true, false>;
      function $new<T, P1>(callback: new (...cbArgs: typeof args) => T, ...args: [P1]): NewCoxObject<typeof callback, typeof args, true, false>;
      function $new<T, P1, P2>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2]): NewCoxObject<typeof callback, typeof args, true, false>;
      function $new<T, P1, P2, P3>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3]): NewCoxObject<typeof callback, typeof args, true, false>;
      function $new<T, P1, P2, P3, P4>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4]): NewCoxObject<typeof callback, typeof args, true, false>;
      function $new<T, P1, P2, P3, P4, P5>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5]): NewCoxObject<typeof callback, typeof args, true, false>;
      function $new<T, P1, P2, P3, P4, P5, P6>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6]): NewCoxObject<typeof callback, typeof args, true, false>;
      function $new<T, P1, P2, P3, P4, P5, P6, P7>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7]): NewCoxObject<typeof callback, typeof args, true, false>;
      function $new<T, P1, P2, P3, P4, P5, P6, P7, P8>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): NewCoxObject<typeof callback, typeof args, true, false>;
      function $new<T, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): NewCoxObject<typeof callback, typeof args, true, false>;
      function $new<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): NewCoxObject<typeof callback, typeof args, true, false>;

      /**
       * メソッドチェーンに対して、各メソッドに対してプロキシするCoxGeneratorを新たに生成します
       * @param initializer 開始点となる対象のthisを返す関数
       * @param ...args チェーンするメソッド群とその引数
       * @param finalizer? thisに対して最終加工をすることが出来ます
       * @return CoxObject
       */
      function $chain<T, P1, R1>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, R1, R2>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, R1, R2, R3>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, R1, R2, R3, R4>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, R1, R2, R3, R4, R5>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, R1, R2, R3, R4, R5, R6>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, R1, R2, R3, R4, R5, R6, R7>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, R1, R2, R3, R4, R5, R6, R7, R8>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
        args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
        args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
        args15: [(thisArg: R14) => (...args: P15[]) => R15, ...P15[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, R1, R2>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        finalizer: (thisArg: R1) => R2,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, R1, R2, R3>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        finalizer: (thisArg: R2) => R3,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, R1, R2, R3, R4>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        finalizer: (thisArg: R3) => R4,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, R1, R2, R3, R4, R5>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        finalizer: (thisArg: R4) => R5,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, R1, R2, R3, R4, R5, R6>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        finalizer: (thisArg: R5) => R6,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, R1, R2, R3, R4, R5, R6, R7>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        finalizer: (thisArg: R6) => R7,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, R1, R2, R3, R4, R5, R6, R7, R8>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        finalizer: (thisArg: R7) => R8,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        finalizer: (thisArg: R8) => R9,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        finalizer: (thisArg: R9) => R10,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        finalizer: (thisArg: R10) => R11,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        finalizer: (thisArg: R11) => R12,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        finalizer: (thisArg: R12) => R13,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
        finalizer: (thisArg: R13) => R14,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
        args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
        finalizer: (thisArg: R14) => R15,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
        args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
        args15: [(thisArg: R14) => (...args: P15[]) => R15, ...P15[]],
        finalizer: (thisArg: R15) => R16,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15 | R16>, AllArgs<ReturnType<typeof args1[0]>>, T, true, false>;
      
    export {
      $cox as cox,
      $call as call,
      $new as new,
      $chain as chain,
    }
  }

  /**
   * 任意の値をthrowする操作に対してプロキシします
   * @param arg 任意の値
   * @return CoxObject
   */
  function $throw<T>(arg: T): RawCoxObject<typeof arg, false, true>;

  namespace $throw {
    /**
     * this無指定のシンプルな関数をプロキシします
     * @param callback プロキシ対象となる関数
     * @param ...args 関数を実行する際に渡す引数
     * @return CoxObject
     */
    function $cox<T>(callback: (...cbArgs: typeof args) => T, ...args: []): CoxCoxObject<typeof callback, typeof args, false, true>;
    function $cox<T, P1>(callback: (...cbArgs: typeof args) => T, ...args: [P1]): CoxCoxObject<typeof callback, typeof args, false, true>;
    function $cox<T, P1, P2>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2]): CoxCoxObject<typeof callback, typeof args, false, true>;
    function $cox<T, P1, P2, P3>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3]): CoxCoxObject<typeof callback, typeof args, false, true>;
    function $cox<T, P1, P2, P3, P4>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4]): CoxCoxObject<typeof callback, typeof args, false, true>;
    function $cox<T, P1, P2, P3, P4, P5>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5]): CoxCoxObject<typeof callback, typeof args, false, true>;
    function $cox<T, P1, P2, P3, P4, P5, P6>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6]): CoxCoxObject<typeof callback, typeof args, false, true>;
    function $cox<T, P1, P2, P3, P4, P5, P6, P7>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7]): CoxCoxObject<typeof callback, typeof args, false, true>;
    function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): CoxCoxObject<typeof callback, typeof args, false, true>;
    function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): CoxCoxObject<typeof callback, typeof args, false, true>;
    function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): CoxCoxObject<typeof callback, typeof args, false, true>;
    
    /**
     * this指定のシンプルな関数をプロキシします
     * @param callback プロキシ対象となる関数
     * @param thisArg 関数を実行する際のthisの値
     * @param ...args 関数を実行する際に渡す引数
     * @return CoxObject
     */
    function $call<T, U>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: []): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, true>;
    function $call<T, U, P1>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, true>;
    function $call<T, U, P1, P2>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, true>;
    function $call<T, U, P1, P2, P3>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, true>;
    function $call<T, U, P1, P2, P3, P4>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, true>;
    function $call<T, U, P1, P2, P3, P4, P5>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, true>;
    function $call<T, U, P1, P2, P3, P4, P5, P6>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, true>;
    function $call<T, U, P1, P2, P3, P4, P5, P6, P7>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, true>;
    function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, true>;
    function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, true>;
    function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): CallCoxObject<typeof callback, typeof args, typeof thisArg, false, true>;

    /**
     * クラス関数に対してインスタンスをnewしつつプロキシします
     * @param callback プロキシ対象となるクラス関数
     * @param ...args クラス関数を実行する際に渡すコンストラクタ引数
     * @return CoxObject
     */
    function $new<T>(callback: new (...cbArgs: typeof args) => T, ...args: []): NewCoxObject<typeof callback, typeof args, false, true>;
    function $new<T, P1>(callback: new (...cbArgs: typeof args) => T, ...args: [P1]): NewCoxObject<typeof callback, typeof args, false, true>;
    function $new<T, P1, P2>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2]): NewCoxObject<typeof callback, typeof args, false, true>;
    function $new<T, P1, P2, P3>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3]): NewCoxObject<typeof callback, typeof args, false, true>;
    function $new<T, P1, P2, P3, P4>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4]): NewCoxObject<typeof callback, typeof args, false, true>;
    function $new<T, P1, P2, P3, P4, P5>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5]): NewCoxObject<typeof callback, typeof args, false, true>;
    function $new<T, P1, P2, P3, P4, P5, P6>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6]): NewCoxObject<typeof callback, typeof args, false, true>;
    function $new<T, P1, P2, P3, P4, P5, P6, P7>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7]): NewCoxObject<typeof callback, typeof args, false, true>;
    function $new<T, P1, P2, P3, P4, P5, P6, P7, P8>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): NewCoxObject<typeof callback, typeof args, false, true>;
    function $new<T, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): NewCoxObject<typeof callback, typeof args, false, true>;
    function $new<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): NewCoxObject<typeof callback, typeof args, false, true>;

    /**
     * メソッドチェーンに対して、各メソッドに対してプロキシするCoxGeneratorを新たに生成します
     * @param initializer 開始点となる対象のthisを返す関数
     * @param ...args チェーンするメソッド群とその引数
     * @param finalizer? thisに対して最終加工をすることが出来ます
     * @return CoxObject
     */
    function $chain<T, P1, R1>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, R1, R2>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, R1, R2, R3>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, R1, R2, R3, R4>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, R1, R2, R3, R4, R5>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, R1, R2, R3, R4, R5, R6>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, R1, R2, R3, R4, R5, R6, R7>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, R1, R2, R3, R4, R5, R6, R7, R8>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
      args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
      args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
      args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
      args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
      args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
      args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
      args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
      args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
      args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
      args15: [(thisArg: R14) => (...args: P15[]) => R15, ...P15[]],
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, R1, R2>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      finalizer: (thisArg: R1) => R2,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, R1, R2, R3>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      finalizer: (thisArg: R2) => R3,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, R1, R2, R3, R4>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      finalizer: (thisArg: R3) => R4,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, R1, R2, R3, R4, R5>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      finalizer: (thisArg: R4) => R5,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, R1, R2, R3, R4, R5, R6>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      finalizer: (thisArg: R5) => R6,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, R1, R2, R3, R4, R5, R6, R7>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      finalizer: (thisArg: R6) => R7,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, R1, R2, R3, R4, R5, R6, R7, R8>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      finalizer: (thisArg: R7) => R8,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      finalizer: (thisArg: R8) => R9,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      finalizer: (thisArg: R9) => R10,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      finalizer: (thisArg: R10) => R11,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
      finalizer: (thisArg: R11) => R12,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
      args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
      finalizer: (thisArg: R12) => R13,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
      args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
      args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
      finalizer: (thisArg: R13) => R14,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
      args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
      args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
      args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
      finalizer: (thisArg: R14) => R15,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;
    function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16>(
      initializer: () => T,
      args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
      args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
      args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
      args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
      args15: [(thisArg: R14) => (...args: P15[]) => R15, ...P15[]],
      finalizer: (thisArg: R15) => R16,
    ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15 | R16>, AllArgs<ReturnType<typeof args1[0]>>, T, false, true>;

    /**
     * 任意のPromiseをawaitする操作に対してプロキシします
     * @param arg 任意のPromiseオブジェクト
     * @return CoxObject
     */
    function $await<T>(arg: Promise<T>): RawCoxObject<typeof arg, true, true>;

    namespace $await {
      /**
       * this無指定のシンプルな関数をプロキシします
       * @param callback プロキシ対象となる関数
       * @param ...args 関数を実行する際に渡す引数
       * @return CoxObject
       */
      function $cox<T>(callback: (...cbArgs: typeof args) => T, ...args: []): CoxCoxObject<typeof callback, typeof args, true, true>;
      function $cox<T, P1>(callback: (...cbArgs: typeof args) => T, ...args: [P1]): CoxCoxObject<typeof callback, typeof args, true, true>;
      function $cox<T, P1, P2>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2]): CoxCoxObject<typeof callback, typeof args, true, true>;
      function $cox<T, P1, P2, P3>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3]): CoxCoxObject<typeof callback, typeof args, true, true>;
      function $cox<T, P1, P2, P3, P4>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4]): CoxCoxObject<typeof callback, typeof args, true, true>;
      function $cox<T, P1, P2, P3, P4, P5>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5]): CoxCoxObject<typeof callback, typeof args, true, true>;
      function $cox<T, P1, P2, P3, P4, P5, P6>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6]): CoxCoxObject<typeof callback, typeof args, true, true>;
      function $cox<T, P1, P2, P3, P4, P5, P6, P7>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7]): CoxCoxObject<typeof callback, typeof args, true, true>;
      function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): CoxCoxObject<typeof callback, typeof args, true, true>;
      function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): CoxCoxObject<typeof callback, typeof args, true, true>;
      function $cox<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): CoxCoxObject<typeof callback, typeof args, true, true>;
      
      /**
       * this指定のシンプルな関数をプロキシします
       * @param callback プロキシ対象となる関数
       * @param thisArg 関数を実行する際のthisの値
       * @param ...args 関数を実行する際に渡す引数
       * @return CoxObject
       */
      function $call<T, U>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: []): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, true>;
      function $call<T, U, P1>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, true>;
      function $call<T, U, P1, P2>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, true>;
      function $call<T, U, P1, P2, P3>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, true>;
      function $call<T, U, P1, P2, P3, P4>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, true>;
      function $call<T, U, P1, P2, P3, P4, P5>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, true>;
      function $call<T, U, P1, P2, P3, P4, P5, P6>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, true>;
      function $call<T, U, P1, P2, P3, P4, P5, P6, P7>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, true>;
      function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, true>;
      function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, true>;
      function $call<T, U, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: (this: typeof thisArg, ...cbArgs: typeof args) => T, thisArg: U, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): CallCoxObject<typeof callback, typeof args, typeof thisArg, true, true>;

      /**
       * クラス関数に対してインスタンスをnewしつつプロキシします
       * @param callback プロキシ対象となるクラス関数
       * @param ...args クラス関数を実行する際に渡すコンストラクタ引数
       * @return CoxObject
       */
      function $new<T>(callback: new (...cbArgs: typeof args) => T, ...args: []): NewCoxObject<typeof callback, typeof args, true, true>;
      function $new<T, P1>(callback: new (...cbArgs: typeof args) => T, ...args: [P1]): NewCoxObject<typeof callback, typeof args, true, true>;
      function $new<T, P1, P2>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2]): NewCoxObject<typeof callback, typeof args, true, true>;
      function $new<T, P1, P2, P3>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3]): NewCoxObject<typeof callback, typeof args, true, true>;
      function $new<T, P1, P2, P3, P4>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4]): NewCoxObject<typeof callback, typeof args, true, true>;
      function $new<T, P1, P2, P3, P4, P5>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5]): NewCoxObject<typeof callback, typeof args, true, true>;
      function $new<T, P1, P2, P3, P4, P5, P6>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6]): NewCoxObject<typeof callback, typeof args, true, true>;
      function $new<T, P1, P2, P3, P4, P5, P6, P7>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7]): NewCoxObject<typeof callback, typeof args, true, true>;
      function $new<T, P1, P2, P3, P4, P5, P6, P7, P8>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8]): NewCoxObject<typeof callback, typeof args, true, true>;
      function $new<T, P1, P2, P3, P4, P5, P6, P7, P8, P9>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9]): NewCoxObject<typeof callback, typeof args, true, true>;
      function $new<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(callback: new (...cbArgs: typeof args) => T, ...args: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]): NewCoxObject<typeof callback, typeof args, true, true>;

      /**
       * メソッドチェーンに対して、各メソッドに対してプロキシするCoxGeneratorを新たに生成します
       * @param initializer 開始点となる対象のthisを返す関数
       * @param ...args チェーンするメソッド群とその引数
       * @param finalizer? thisに対して最終加工をすることが出来ます
       * @return CoxObject
       */
      function $chain<T, P1, R1>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, R1, R2>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, R1, R2, R3>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, R1, R2, R3, R4>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, R1, R2, R3, R4, R5>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, R1, R2, R3, R4, R5, R6>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, R1, R2, R3, R4, R5, R6, R7>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, R1, R2, R3, R4, R5, R6, R7, R8>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
        args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
        args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
        args15: [(thisArg: R14) => (...args: P15[]) => R15, ...P15[]],
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, R1, R2>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        finalizer: (thisArg: R1) => R2,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, R1, R2, R3>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        finalizer: (thisArg: R2) => R3,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, R1, R2, R3, R4>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        finalizer: (thisArg: R3) => R4,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, R1, R2, R3, R4, R5>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        finalizer: (thisArg: R4) => R5,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, R1, R2, R3, R4, R5, R6>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        finalizer: (thisArg: R5) => R6,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, R1, R2, R3, R4, R5, R6, R7>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        finalizer: (thisArg: R6) => R7,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, R1, R2, R3, R4, R5, R6, R7, R8>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        finalizer: (thisArg: R7) => R8,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        finalizer: (thisArg: R8) => R9,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        finalizer: (thisArg: R9) => R10,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        finalizer: (thisArg: R10) => R11,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        finalizer: (thisArg: R11) => R12,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        finalizer: (thisArg: R12) => R13,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
        finalizer: (thisArg: R13) => R14,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
        args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
        finalizer: (thisArg: R14) => R15,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
      function $chain<T, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16>(
        initializer: () => T,
        args1: [(thisArg: T) => (...args: P1[]) => R1, ...P1[]],
        args2: [(thisArg: R1) => (...args: P2[]) => R2, ...P2[]],
        args3: [(thisArg: R2) => (...args: P3[]) => R3, ...P3[]],
        args4: [(thisArg: R3) => (...args: P4[]) => R4, ...P4[]],
        args5: [(thisArg: R4) => (...args: P5[]) => R5, ...P5[]],
        args6: [(thisArg: R5) => (...args: P6[]) => R6, ...P6[]],
        args7: [(thisArg: R6) => (...args: P7[]) => R7, ...P7[]],
        args8: [(thisArg: R7) => (...args: P8[]) => R8, ...P8[]],
        args9: [(thisArg: R8) => (...args: P9[]) => R9, ...P9[]],
        args10: [(thisArg: R9) => (...args: P10[]) => R10, ...P10[]],
        args11: [(thisArg: R10) => (...args: P11[]) => R11, ...P11[]],
        args12: [(thisArg: R11) => (...args: P12[]) => R12, ...P12[]],
        args13: [(thisArg: R12) => (...args: P13[]) => R13, ...P13[]],
        args14: [(thisArg: R13) => (...args: P14[]) => R14, ...P14[]],
        args15: [(thisArg: R14) => (...args: P15[]) => R15, ...P15[]],
        finalizer: (thisArg: R15) => R16,
      ): ChainCoxObject<(thisArg: T, ...args: AllArgs<ReturnType<typeof args1[0]>>) => IterableIterator<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15 | R16>, AllArgs<ReturnType<typeof args1[0]>>, T, true, true>;
  
      export {
        $cox as cox,
        $call as call,
        $new as new,
        $chain as chain,
      }
    }

    export {
      $cox as cox,
      $call as call,
      $new as new,
      $chain as chain,
      $await as await,
    }
  }

  export {
    coxSymbols as symbol,
    wrap,
    step,
    stepAsync,
    $call as call,
    $new as new,
    $chain as chain,
    $raw as raw,
    $await as await,
    $throw as throw,
  }
}

export default $cox;