export default function AppHeader({
  onBack,
  backLabel = 'Back',
  confirmBack = null,
  title,
  subtitle,
  profile,
  accent,
  onSwitchProfile,
}) {
  function handleBack() {
    if (confirmBack) {
      if (window.confirm(confirmBack)) onBack()
    } else {
      onBack()
    }
  }

  const displayName = profile
    ? profile.charAt(0).toUpperCase() + profile.slice(1)
    : ''

  return (
    <header className="app-header">
      <div className="header-left">
        {onBack && (
          <button className="header-back" onClick={handleBack}>
            <span className="header-back-arrow">←</span>
            <span className="header-back-label">{backLabel}</span>
          </button>
        )}
        {title && (
          <div className={`logo${onBack ? ' logo-dimmed' : ''}`}>
            {title}{subtitle && <span> / {subtitle}</span>}
          </div>
        )}
      </div>

      {profile && (
        <div className="header-right">
          <div
            className={`profile-badge${!onSwitchProfile ? ' profile-badge-static' : ''}`}
            onClick={onSwitchProfile || undefined}
          >
            <div className="avatar" style={{ background: accent }}>{displayName[0]}</div>
            <span>{displayName}</span>
          </div>
        </div>
      )}
    </header>
  )
}
