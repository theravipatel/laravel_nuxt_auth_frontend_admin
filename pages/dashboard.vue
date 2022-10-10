<template>
    <div>
        dashboard {{ $auth.user }}
    </div>
</template>
    
<script>
export default {
    middleware: 'auth',
    name: 'DashboardPage',
}
</script>