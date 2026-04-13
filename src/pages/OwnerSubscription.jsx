import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { subscriptionAPI } from '../services/api';
import {
  CreditCardIcon, CheckCircleIcon, ShieldCheckIcon,
  ArrowRightIcon, ZapIcon, CalendarIcon
} from '../components/Icons';

export default function OwnerSubscription() {
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    const [planRes, statusRes] = await Promise.all([
      subscriptionAPI.getPlan(),
      subscriptionAPI.getStatus(),
    ]);
    if (planRes.success) setPlan(planRes.plan);
    if (statusRes.success) setPayment(statusRes.payment);
    setLoading(false);
  }

  async function handlePay() {
    setPaying(true);
    const result = await subscriptionAPI.pay();
    if (result.success) {
      toast.success(result.message);
      loadData();
    } else {
      toast.error(result.message || 'Payment failed');
    }
    setPaying(false);
  }

  const hasPaid = payment?.hasPaid;

  return (
    <DashboardLayout role="owner">
      <style>{`
        .sub-header { margin-bottom: var(--space-8); }
        .sub-title {
          font-size: var(--text-3xl); font-weight: 800;
          letter-spacing: var(--tracking-tighter); margin-bottom: var(--space-2);
        }
        .sub-subtitle { color: var(--text-secondary); font-size: var(--text-base); }

        .sub-status-card {
          background: var(--bg-secondary); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-6);
          margin-bottom: var(--space-8); display: flex; align-items: center;
          gap: var(--space-5); flex-wrap: wrap;
        }
        .sub-status-active {
          border-color: rgba(34,197,94,0.3);
          background: linear-gradient(135deg, rgba(34,197,94,0.05), rgba(16,185,129,0.03));
        }
        .sub-status-inactive {
          border-color: rgba(239,68,68,0.3);
          background: linear-gradient(135deg, rgba(239,68,68,0.05), rgba(239,68,68,0.03));
        }
        .sub-status-badge {
          padding: var(--space-2) var(--space-4); border-radius: var(--radius-full);
          font-size: var(--text-xs); font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .sub-status-badge.active { background: rgba(34,197,94,0.15); color: #16a34a; }
        .sub-status-badge.inactive { background: rgba(239,68,68,0.15); color: #dc2626; }
        .sub-status-info { flex: 1; }
        .sub-status-plan { font-size: var(--text-lg); font-weight: 700; margin-bottom: 4px; }
        .sub-status-detail { font-size: var(--text-sm); color: var(--text-secondary); display: flex; align-items: center; gap: 6px; }

        .sub-plan-card {
          max-width: 480px; margin: 0 auto;
          background: var(--bg-secondary);
          border: 2px solid var(--primary);
          border-radius: var(--radius-xl); padding: var(--space-8);
          position: relative; overflow: hidden;
          box-shadow: 0 4px 24px rgba(79,70,229,0.08);
        }
        .sub-plan-card::before {
          content: 'ONE-TIME'; position: absolute; top: 18px; right: -24px;
          background: var(--primary); color: white; padding: 4px 34px;
          font-size: 0.65rem; font-weight: 800; letter-spacing: 0.12em;
          transform: rotate(45deg);
        }
        .sub-plan-icon {
          width: 56px; height: 56px; border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(79,70,229,0.15), rgba(139,92,246,0.1));
          display: flex; align-items: center; justify-content: center;
          margin-bottom: var(--space-4);
        }
        .sub-plan-name { font-size: var(--text-xl); font-weight: 800; margin-bottom: var(--space-1); }
        .sub-plan-desc { font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-5); }
        .sub-plan-price {
          font-size: 2.75rem; font-weight: 900; letter-spacing: -0.03em;
          margin-bottom: var(--space-1);
        }
        .sub-plan-price span { font-size: var(--text-sm); font-weight: 500; color: var(--text-secondary); }
        .sub-plan-features { list-style: none; padding: 0; margin: var(--space-5) 0 var(--space-6) 0; }
        .sub-plan-features li {
          display: flex; align-items: center; gap: var(--space-3);
          padding: var(--space-2) 0; font-size: var(--text-sm);
          color: var(--text-secondary);
        }
        .sub-plan-features li svg { color: #22c55e; flex-shrink: 0; }
        .sub-plan-btn {
          width: 100%; padding: var(--space-4) var(--space-5);
          border: none; border-radius: var(--radius-lg);
          font-size: var(--text-base); font-weight: 700;
          cursor: pointer; transition: all 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: inherit;
        }
        .sub-plan-btn.primary {
          background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white;
        }
        .sub-plan-btn.primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(79,70,229,0.35); }
        .sub-plan-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none !important; }
        .sub-plan-btn.paid {
          background: rgba(34,197,94,0.1); color: #16a34a;
          border: 2px solid rgba(34,197,94,0.3); cursor: default;
        }
        .sub-plan-after {
          text-align: center; margin-top: var(--space-6); padding: var(--space-4);
          background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.15);
          border-radius: var(--radius-lg);
        }
        .sub-plan-after button {
          margin-top: var(--space-3); padding: var(--space-2) var(--space-5);
          background: var(--primary); color: white; border: none;
          border-radius: var(--radius-lg); font-weight: 600;
          cursor: pointer; transition: all 0.2s; font-family: inherit;
        }
        .sub-plan-after button:hover { background: var(--primary-hover); }
      `}</style>

      <div className="sub-header">
        <h1 className="sub-title">Hostel Listing</h1>
        <p className="sub-subtitle">Complete one-time payment to list your hostel on the platform</p>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 'var(--space-16)' }}>
          <div className="spinner spinner-lg" />
        </div>
      ) : (
        <>
          {/* Payment Status */}
          <div className={`sub-status-card ${hasPaid ? 'sub-status-active' : 'sub-status-inactive'}`}>
            <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: hasPaid ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)' }}>
              {hasPaid ? <ShieldCheckIcon size={24} style={{ color: '#16a34a' }} /> : <CreditCardIcon size={24} style={{ color: '#dc2626' }} />}
            </div>
            <div className="sub-status-info">
              <div className="sub-status-plan">
                {hasPaid ? 'Hostel Listing — Active' : 'Payment Required'}
              </div>
              <div className="sub-status-detail">
                {hasPaid ? (
                  <>
                    <CalendarIcon size={14} />
                    Paid on {new Date(payment.date).toLocaleDateString()} · ₹{payment.amount?.toLocaleString()} · Lifetime access
                  </>
                ) : (
                  'Complete one-time payment to start listing your hostel'
                )}
              </div>
            </div>
            <span className={`sub-status-badge ${hasPaid ? 'active' : 'inactive'}`}>
              {hasPaid ? 'active' : 'unpaid'}
            </span>
          </div>

          {/* Plan Card */}
          {plan && (
            <div className="sub-plan-card">
              <div className="sub-plan-icon">
                <ZapIcon size={28} style={{ color: 'var(--primary)' }} />
              </div>
              <div className="sub-plan-name">{plan.name}</div>
              <div className="sub-plan-desc">No recurring fees. Pay once, list forever.</div>
              <div className="sub-plan-price">
                ₹{plan.price?.toLocaleString()}<span>  one-time</span>
              </div>
              <ul className="sub-plan-features">
                {plan.features?.map((f, i) => (
                  <li key={i}><CheckCircleIcon size={16} /> {f}</li>
                ))}
              </ul>

              {hasPaid ? (
                <>
                  <button className="sub-plan-btn paid" disabled>
                    <CheckCircleIcon size={18} /> Payment Complete
                  </button>
                  <div className="sub-plan-after">
                    <div style={{ fontWeight: 600, color: '#16a34a' }}>
                      ✅ You're all set! Your hostel listing is active.
                    </div>
                    <button onClick={() => navigate('/owner/hostels')}>
                      Go to My Hostels <ArrowRightIcon size={14} />
                    </button>
                  </div>
                </>
              ) : (
                <button
                  className="sub-plan-btn primary"
                  onClick={handlePay}
                  disabled={paying}
                >
                  {paying ? 'Processing Payment...' : (
                    <>Pay ₹{plan.price?.toLocaleString()} & Activate <ArrowRightIcon size={16} /></>
                  )}
                </button>
              )}
            </div>
          )}
        </>
      )}
    </DashboardLayout>
  );
}
