import {type  AppRouter } from '../../BackEnd/trpcServer';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>({});