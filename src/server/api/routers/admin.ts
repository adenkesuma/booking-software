import { publicProcedure, router } from '../trpc.ts'
import { nanoid } from 'nanoid'
import { zod } from 'zod'
import { getJwtSecretKey } from '../../../lib/auth'

export const adminRouter = router({
  login: publicProcedure
    .input(z.input({email: z.string().email(), password: z.string()}))
    .mutation(async ({ ctx, input }) => {
      const { res } = ctx
      const { email, password } = input

      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        // user is authenticated as admin

        const token = await new SignJWT({})
          .setProtectedHeader({alg: 'HS256'})
          .setJti(nanoid())
          .setIssuedAt()
          .setExpirationTime('1h')
          .sign(new TextEncoder().encode(getJwtSecretKey()))
      }
    }),
})
