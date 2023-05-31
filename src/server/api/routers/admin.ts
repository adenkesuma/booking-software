import { publicProcedure, router } from '../trpc.ts'
import { zod } from 'zod'

export const adminRouter = router({
  login: publicProcedure
    .input(z.input({email: z.string().email(), password: z.string()}))
    .mutation(async ({ ctx, input }) => {
      const { res } = ctx
      const { email, password } = input

      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        // user is authenticated as admin
      }
    }),
})
