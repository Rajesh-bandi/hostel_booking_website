import { useState } from 'react';

/**
 * Reusable confirmation modal — replaces browser confirm() dialogs.
 * Usage:
 *   <ConfirmModal
 *     isOpen={showConfirm}
 *     title="Delete Hostel"
 *     message="Are you sure you want to delete this hostel?"
 *     confirmText="Delete"
 *     confirmColor="#ef4444"
 *     onConfirm={() => { doDelete(); setShowConfirm(false); }}
 *     onCancel={() => setShowConfirm(false)}
 *   />
 */
export default function ConfirmModal({
  isOpen,
  title = 'Confirm Action',
  message = 'Are you sure?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmColor = 'var(--primary, #4f46e5)',
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .cm-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: cmFadeIn 0.2s ease;
        }
        @keyframes cmFadeIn { from { opacity: 0; } to { opacity: 1; } }
        .cm-card {
          background: var(--bg-primary, #fff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 16px;
          padding: 28px;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          animation: cmSlideUp 0.25s cubic-bezier(.4,0,.2,1);
        }
        body.dark-mode .cm-card {
          background: #1e293b;
          border-color: #334155;
        }
        @keyframes cmSlideUp { from { opacity: 0; transform: translateY(12px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .cm-title {
          font-size: 1.125rem; font-weight: 700; margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .cm-message {
          font-size: 0.9rem; color: var(--text-secondary, #64748b);
          line-height: 1.5; margin-bottom: 24px;
        }
        .cm-actions {
          display: flex; gap: 10px; justify-content: flex-end;
        }
        .cm-btn {
          padding: 10px 20px; border-radius: 10px; font-size: 0.875rem;
          font-weight: 600; cursor: pointer; border: none;
          transition: all 0.2s; font-family: inherit;
        }
        .cm-btn-cancel {
          background: var(--bg-secondary, #f1f5f9);
          color: var(--text-primary, #334155);
          border: 1px solid var(--border, #e2e8f0);
        }
        body.dark-mode .cm-btn-cancel {
          background: #334155; color: #e2e8f0; border-color: #475569;
        }
        .cm-btn-cancel:hover { opacity: 0.8; }
        .cm-btn-confirm { color: #fff; }
        .cm-btn-confirm:hover { opacity: 0.85; transform: translateY(-1px); }
      `}</style>
      <div className="cm-overlay" onClick={onCancel}>
        <div className="cm-card" onClick={e => e.stopPropagation()}>
          <div className="cm-title">{title}</div>
          <div className="cm-message">{message}</div>
          <div className="cm-actions">
            <button className="cm-btn cm-btn-cancel" onClick={onCancel}>{cancelText}</button>
            <button
              className="cm-btn cm-btn-confirm"
              style={{ background: confirmColor }}
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
