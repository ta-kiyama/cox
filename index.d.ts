/**
 * 各種cox関連メソッドで得られるプロキシされたオブジェクトのtypeを識別するSymbolの型定義
 */
export declare type CoxSymbol = keyof typeof coxSymbols;

/**
 * 各種cox関連メソッドで得られるプロキシされたオブジェクトの型定義
 */
export declare type CoxObject<T extends CoxSymbol, U extends Function, V extends Array<any>, W = any, X extends boolean = false, Y extends boolean = false> = {
  type: T,
  callback: U,
  args: V,
  thisArg: T extends "call" | "chain" | "raw" ? W : undefined,
  isAsync: X,
  isError: Y,
};

/**
 * this無指定のシンプルな関数をプロキシします
 * @param callback プロキシ対象となる関数
 * @param ...args 関数を実行する際に渡す引数
 * @return CoxObject
 */
declare function cox<T>(callback: () => T): CoxObject<"cox", () => T, []>;
declare function cox<T, P1>(callback: (p1: P1) => T, p1: P1): CoxObject<"cox", (p1: P1) => T, [P1]>;
declare function cox<T, P1, P2>(callback: (p1: P1, p2: P2) => T, p1: P1, p2: P2): CoxObject<"cox", (p1: P1, p2: P2) => T, [P1, P2]>;
declare function cox<T, P1, P2, P3>(callback: (p1: P1, p2: P2, p3: P3) => T, p1: P1, p2: P2, p3: P3): CoxObject<"cox", (p1: P1, p2: P2, p3: P3) => T, [P1, P2, P3]>;
declare function cox<T, P1, P2, P3, P4>(callback: (p1: P1, p2: P2, p3: P3, p4: P4) => T, p1: P1, p2: P2, p3: P3, p4: P4): CoxObject<"cox", (p1: P1, p2: P2, p3: P3, p4: P4) => T, [P1, P2, P3, P4]>;

declare namespace cox {
  /**
    * this指定のシンプルな関数をプロキシします
    * @param callback プロキシ対象となる関数
    * @param thisArg 関数を実行する際のthisの値
    * @param ...args 関数を実行する際に渡す引数
    * @return CoxObject
    */
  function $call<T, U>(callback: (this: U) => T, thisArg: U): CoxObject<"call", (this: U) => T, [], U>;
  function $call<T, U, P1>(callback: (this: U, p1: P1) => T, thisArg: U, p1: P1): CoxObject<"call", (this: U, p1: P1) => T, [P1], U>;
  function $call<T, U, P1, P2>(callback: (this: U, p1: P1, p2: P2) => T, thisArg: U, p1: P1, p2: P2): CoxObject<"call", (this: U, p1: P1, p2: P2) => T, [P1, P2], U>;
  function $call<T, U, P1, P2, P3>(callback: (this: U, p1: P1, p2: P2, p3: P3) => T, thisArg: U, p1: P1, p2: P2, p3: P3): CoxObject<"call", (this: U, p1: P1, p2: P2, p3: P3) => T, [P1, P2, P3], U>;
  function $call<T, U, P1, P2, P3, P4>(callback: (this: U, p1: P1, p2: P2, p3: P3, P4) => T, thisArg: U, p1: P1, p2: P2, p3: P3): CoxObject<"call", (this: U, p1: P1, p2: P2, p3: P3, p4: P4) => T, [P1, P2, P3, P4], U>;

  /**
   * クラス関数に対してインスタンスをnewしつつプロキシします
   * @param callback プロキシ対象となるクラス関数
   * @param ...args クラス関数を実行する際に渡すコンストラクタ引数
   * @return CoxObject
   */
  function $new<T>(callback: () => T): CoxObject<"new", () => T, []>;
  function $new<T, P1>(callback: (p1: P1) => T, p1: P1): CoxObject<"new", (p1: P1) => T, [P1]>;
  function $new<T, P1, P2>(callback: (p1: P1, p2: P2) => T, p1: P1, p2: P2): CoxObject<"new", (p1: P1, p2: P2) => T, [P1, P2]>;
  function $new<T, P1, P2, P3>(callback: (p1: P1, p2: P2, p3: P3) => T, p1: P1, p2: P2, p3: P3): CoxObject<"new", (p1: P1, p2: P2, p3: P3) => T, [P1, P2, P3]>;
  function $new<T, P1, P2, P3, P4>(callback: (p1: P1, p2: P2, p3: P3, p4: P4) => T, p1: P1, p2: P2, p3: P3, p4: P4): CoxObject<"new", (p1: P1, p2: P2, p3: P3, p4: P4) => T, [P1, P2, P3, P4]>;

  /**
   * メソッドチェーンに対して、各メソッドに対してプロキシするCoxGeneratorを新たに生成します
   * @param initializer 開始点となる対象のthisを返す関数
   * @param ...args チェーンするメソッド群とその引数
   * @param finalizer? thisに対して最終加工をすることが出来ます
   * @return CoxObject
   */
  function $chain<T, U, P1 extends Array<any>, R1>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1) => R1, ...any[]],
  ): CoxObject<"chain", (thisArg: T, ...args: P1) => IterableIterator<R1>, P1, T>;
  function $chain<T, U, P1 extends Array<any>, P2 extends Array<any>, R1, R2>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1) => R1, ...any[]],
    args2: [(thisArg: R1) => (...args: P2) => R2, ...any[]],
  ): CoxObject<"chain", (thisArg: T, ...args: P1) => IterableIterator<R1 | R2>, P1, T>;
  function $chain<T, U, P1 extends Array<any>, P2 extends Array<any>, P3 extends Array<any>, R1, R2, R3>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1) => R1, ...any[]],
    args2: [(thisArg: R1) => (...args: P2) => R2, ...any[]],
    args3: [(thisArg: R2) => (...args: P3) => R3, ...any[]],
  ): CoxObject<"chain", (thisArg: T, ...args: P1) => IterableIterator<R1 | R2 | R3>, P1, T>;
  function $chain<T, U, P1 extends Array<any>, P2 extends Array<any>, P3 extends Array<any>, P4 extends Array<any>, R1, R2, R3, R4>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1) => R1, ...any[]],
    args2: [(thisArg: R1) => (...args: P2) => R2, ...any[]],
    args3: [(thisArg: R2) => (...args: P3) => R3, ...any[]],
    args4: [(thisArg: R3) => (...args: P4) => R4, ...any[]],
  ): CoxObject<"chain", (thisArg: T, ...args: P1) => IterableIterator<R1 | R2 | R3 | R4>, P1, T>;
  function $chain<T, U, P1 extends Array<any>, R1, R2>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1) => R1, ...any[]],
    finalizer: (thisArg: R1) => R2,
  ): CoxObject<"chain", (thisArg: T, ...args: P1) => IterableIterator<R1 | R2>, P1, T>;
  function $chain<T, P1 extends Array<any>, P2 extends Array<any>, R1, R2, R3>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1) => R1, ...any[]],
    args2: [(thisArg: R1) => (...args: P2) => R2, ...any[]],
    finalizer: (thisArg: R2) => R3,
  ): CoxObject<"chain", (thisArg: T, ...args: P1) => IterableIterator<R1 | R2 | R3>, P1, T>;
  function $chain<T, U, P1 extends Array<any>, P2 extends Array<any>, P3 extends Array<any>, R1, R2, R3, R4>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1) => R1, ...any[]],
    args2: [(thisArg: R1) => (...args: P2) => R2, ...any[]],
    args3: [(thisArg: R2) => (...args: P3) => R3, ...any[]],
    finalizer: (thisArg: R3) => R4,
  ): CoxObject<"chain", (thisArg: T, ...args: P1) => IterableIterator<R1 | R2 | R3 | R4>, P1, T>;
  function $chain<T, U, P1 extends Array<any>, P2 extends Array<any>, P3 extends Array<any>, P4 extends Array<any>, R1, R2, R3, R4, R5>(
    initializer: () => T,
    args1: [(thisArg: T) => (...args: P1) => R1, ...any[]],
    args2: [(thisArg: R1) => (...args: P2) => R2, ...any[]],
    args3: [(thisArg: R2) => (...args: P3) => R3, ...any[]],
    args4: [(thisArg: R3) => (...args: P4) => R4, ...any[]],
    finalizer: (thisArg: R4) => R5,
  ): CoxObject<"chain", (thisArg: T, ...args: P1) => IterableIterator<R1 | R2 | R3 | R4 | R5>, P1, T>;

  /**
   * 任意の値をtapする操作に対してプロキシします
   * @param arg 任意の値
   * @return CoxObject
   */
  function $raw<T>(arg: T): CoxObject<"raw", undefined, [], T>;

  /**
   * 任意のPromiseをawaitする操作に対してプロキシします
   * @param arg 任意のPromiseオブジェクト
   * @return CoxObject
   */
  function $await<T, U extends Promise<T>>(arg: U): CoxObject<"raw", undefined, [], U, true>;

  namespace $await {
    /**
     * クラス関数に対してインスタンスをnewしつつプロキシします
     * @param callback プロキシ対象となるクラス関数
     * @param ...args クラス関数を実行する際に渡すコンストラクタ引数
     * @return CoxObject
     */
    function $new<T>(callback: () => T): CoxObject<"new", () => T, [], never, true>;
    function $new<T, P1>(callback: (p1: P1) => T, p1: P1): CoxObject<"new", (p1: P1) => T, [P1], never, true>;
    function $new<T, P1, P2>(callback: (p1: P1, p2: P2) => T, p1: P1, p2: P2): CoxObject<"new", (p1: P1, p2: P2) => T, [P1, P2], never, true>;
    function $new<T, P1, P2, P3>(callback: (p1: P1, p2: P2, p3: P3) => T, p1: P1, p2: P2, p3: P3): CoxObject<"new", (p1: P1, p2: P2, p3: P3) => T, [P1, P2, P3], never, true>;
    function $new<T, P1, P2, P3, P4>(callback: (p1: P1, p2: P2, p3: P3, p4: P4) => T, p1: P1, p2: P2, p3: P3, p4: P4): CoxObject<"new", (p1: P1, p2: P2, p3: P3, p4: P4) => T, [P1, P2, P3, P4], never, true>;

    export {
      $new as new,
    }
  }

  /**
   * 任意の値をthrowする操作に対してプロキシします
   * @param arg 任意の値
   * @return CoxObject
   */
  function $throw<T>(arg: T): CoxObject<"raw", undefined, [], T, false, true>;

  export {
    $call as call,
    $new as new,
    $chain as chain,
    $raw as raw,
    $await as await,
    $throw as throw,
  }
}

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

export default cox;