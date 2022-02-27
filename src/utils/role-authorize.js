export function Pass(userRoles, requireRoles) {
  console.log(userRoles, requireRoles);
  if (requireRoles.length == 0) return true;
  return requireRoles.reduce((able, role) => {
    if (userRoles.includes(role)) return able || true;
    else return able;
  }, false);
}
