import { useRouteError } from "react-router-dom";

import type {
  TRouteError
} from './types'


export const ErrorPage = () => {
  const error = useRouteError() as TRouteError;

  return (
    <div className='page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error
        ? <i>{error.statusText} - {error.data}</i>
        : <i>'Error'</i>
      }
      </p>
    </div>
  );
}
