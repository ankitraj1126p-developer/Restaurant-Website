import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Flame } from "lucide-react";
import { toast } from "sonner";

import SpecularButton from "@/components/SpecularButton";
import SplitText from "@/components/SplitText";
import { useAuth } from "@/context/auth-context";


function LoginPage() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="relative grid min-h-screen place-items-center bg-background px-5 py-16">
      <div className="ff-rise w-full max-w-md">
        <Link to="/" className="mx-auto flex w-fit items-center gap-2.5">
          <Flame className="ff-flicker size-6 text-primary" />
          <span className="ff-fire-text font-display text-2xl tracking-wide">Fork &amp; Flame</span>
        </Link>

        <div className="mt-10 rounded-2xl border border-border bg-card/70 p-7 shadow-2xl backdrop-blur-sm sm:p-9">
          <div className="flex justify-center">
            <SplitText
              tag="h1"
              text="Sign in to your account"
              className="text-center text-3xl"
              delay={35}
              duration={0.8}
              splitType="chars"
              from={{ opacity: 0, y: 24, scaleY: 1.4 }}
              to={{ opacity: 1, y: 0, scaleY: 1 }}
              rootMargin="0px"
              threshold={0.05}
            />
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Welcome back! Please enter your details.
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const u = auth.login(email.trim());
              toast.success(`Welcome back, ${u.name}!`);
              navigate("/");
            }}
          >
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-border bg-secondary/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm text-muted-foreground">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => toast("Password reset link will be sent to your email.")}
                  className="text-sm text-primary hover:underline"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative mt-2">
                <input
                  id="password"
                  type={show ? "text" : "password"}
                  required
                  minLength={6}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-border bg-secondary/60 px-4 py-3 pr-11 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                />
                <button
                  type="button"
                  aria-label={show ? "Hide password" : "Show password"}
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                >
                  {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <SpecularButton
              type="submit"
              size="md"
              radius={12}
              className="w-full"
              textColor="#f8e6c8"
              lineColor="#fbbf24"
              baseColor="#7c4a12"
              tint="#f97316"
              tintOpacity={0.12}
              intensity={1.2}
              shineSize={12}
              proximity={320}
              autoAnimate
            >
              Sign in
            </SpecularButton>
          </form>

          <div className="my-7 flex items-center gap-4">
            <span className="h-px flex-1 border-b border-dashed border-border" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">or</span>
            <span className="h-px flex-1 border-b border-dashed border-border" />
          </div>

          <div className="space-y-3">
            {["Continue with Google", "Continue with Apple"].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => toast("Social sign-in needs an account backend — I can enable it for you.")}
                className="w-full rounded-lg border border-border bg-secondary/40 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                {label}
              </button>
            ))}
          </div>

          <p className="mt-7 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-semibold text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          <Link to="/" className="ff-underline">
            Back to Fork &amp; Flame
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
