import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Flame } from "lucide-react";
import { toast } from "sonner";

import SpecularButton from "@/components/SpecularButton";
import SplitText from "@/components/SplitText";
import { useAuth } from "@/context/auth-context";


function SignupPage() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const mismatch = confirm.length > 0 && confirm !== password;

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
              text="Create your account"
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
            Sign up to order faster and book tables in seconds.
          </p>

          <button
            type="button"
            onClick={() => toast("Social sign-up needs an account backend — I can enable it for you.")}
            className="mt-7 w-full rounded-lg border border-border bg-secondary/40 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
          >
            Sign up with Google
          </button>

          <div className="my-6 flex items-center gap-4">
            <span className="h-px flex-1 border-b border-dashed border-border" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">or</span>
            <span className="h-px flex-1 border-b border-dashed border-border" />
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (password !== confirm) {
                toast.error("Passwords do not match.");
                return;
              }
              auth.register({ name: name.trim(), email: email.trim() });
              toast.success(`Account created — welcome, ${name.trim()}!`);
              navigate("/");
            }}
          >
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground">
                Name <span className="text-destructive">*</span>
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-lg border border-border bg-secondary/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Email <span className="text-destructive">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-2 w-full rounded-lg border border-border bg-secondary/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm text-muted-foreground">
                Password <span className="text-destructive">*</span>
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-2 w-full rounded-lg border border-border bg-secondary/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="confirm" className="text-sm text-muted-foreground">
                Confirm password <span className="text-destructive">*</span>
              </label>
              <input
                id="confirm"
                type="password"
                required
                minLength={6}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Re-enter your password"
                className={`mt-2 w-full rounded-lg border bg-secondary/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary ${
                  mismatch ? "border-destructive" : "border-border"
                }`}
              />
              {mismatch && <p className="mt-2 text-xs text-destructive">Passwords do not match.</p>}
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
              Create account
            </SpecularButton>
          </form>

          <p className="mt-7 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline">
              Login here
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

export default SignupPage;
